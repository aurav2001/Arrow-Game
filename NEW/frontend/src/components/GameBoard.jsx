import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Undo2, X, Star, AlertCircle, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Video } from 'lucide-react';
import { playClick, playError, playWin } from '../utils/audio';
import { levels } from '../levels';

const API_URL = 'http://localhost:5000/api';

export default function GameBoard({ levelId, onBack, onProgressSaved, onToggleCreatorMode }) {
  const level = levels.find((l) => l.id === levelId) || levels[0];
  
  const [path, setPath] = useState([{ r: level.start.r, c: level.start.c }]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [shake, setShake] = useState(false);
  const [stars, setStars] = useState(3);
  const [saving, setSaving] = useState(false);
  
  const timerRef = useRef(null);
  const boardRef = useRef(null);

  // Timer setup
  useEffect(() => {
    setTimeSpent(0);
    setIsCompleted(false);
    setPath([{ r: level.start.r, c: level.start.c }]);
    
    timerRef.current = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [levelId]);

  // Handle Level Complete
  const handleComplete = async (finalPath) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCompleted(true);
    playWin();

    // Calculate stars:
    // Level 1: <10s = 3 stars, <20s = 2 stars, else 1 star
    // Larger levels get more generous thresholds
    let finalStars = 3;
    const thresh = level.rows * 4; // e.g. 5x5 = 20s
    if (timeSpent > thresh) finalStars = 1;
    else if (timeSpent > thresh / 2) finalStars = 2;
    setStars(finalStars);

    // Save progress to DB
    setSaving(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_URL}/game/save-progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          levelId: level.id,
          timeSpent,
          stars: finalStars,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onProgressSaved(data);
      }
    } catch (err) {
      console.error('Error saving progress:', err);
    } finally {
      setSaving(false);
    }
  };

  // Check if a move is valid under arrow rules
  const isValidMove = (from, to) => {
    const dr = to.r - from.r;
    const dc = to.c - from.c;

    // Must be adjacent (no diagonal movements)
    const isAdjacent = (Math.abs(dr) === 1 && dc === 0) || (Math.abs(dc) === 1 && dr === 0);
    if (!isAdjacent) return false;

    // Out of bounds check
    if (to.r < 0 || to.r >= level.rows || to.c < 0 || to.c >= level.cols) return false;

    const fromCell = level.grid[from.r][from.c];
    const toCell = level.grid[to.r][to.c];

    // Cannot step on wall
    if (toCell.type === 'wall') return false;

    // Check arrow constraints on the 'from' cell
    if (fromCell.arrow) {
      if (fromCell.arrow === 'up' && dr !== -1) return false;
      if (fromCell.arrow === 'down' && dr !== 1) return false;
      if (fromCell.arrow === 'left' && dc !== -1) return false;
      if (fromCell.arrow === 'right' && dc !== 1) return false;
    }

    // Check arrow constraints on the 'to' cell
    if (toCell.arrow) {
      if (toCell.arrow === 'up' && dr !== -1) return false;
      if (toCell.arrow === 'down' && dr !== 1) return false;
      if (toCell.arrow === 'left' && dc !== -1) return false;
      if (toCell.arrow === 'right' && dc !== 1) return false;
    }

    return true;
  };

  // Try to add cell to path
  const tryAddCell = (r, c) => {
    if (isCompleted) return;

    const last = path[path.length - 1];

    // If touching the second-to-last cell, user is backtracking (erasing)
    if (path.length > 1) {
      const prev = path[path.length - 2];
      if (prev.r === r && prev.c === c) {
        setPath(path.slice(0, -1));
        playClick();
        return;
      }
    }

    // If cell already in path but not backtracking, block
    const alreadyInPath = path.some((cell) => cell.r === r && cell.c === c);
    if (alreadyInPath) return;

    // Validate the move
    const target = { r, c };
    if (isValidMove(last, target)) {
      const newPath = [...path, target];
      setPath(newPath);
      playClick();

      // Check if level ended
      if (r === level.end.r && c === level.end.c) {
        setIsDrawing(false);
        handleComplete(newPath);
      }
    } else {
      // Trigger error sound and board shake
      playError();
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  };

  // Keyboard controls helper
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isCompleted) return;
      const last = path[path.length - 1];
      let tr = last.r;
      let tc = last.c;

      if (e.key === 'ArrowUp') tr -= 1;
      else if (e.key === 'ArrowDown') tr += 1;
      else if (e.key === 'ArrowLeft') tc -= 1;
      else if (e.key === 'ArrowRight') tc += 1;
      else return; // Ignore other keys

      e.preventDefault();
      tryAddCell(tr, tc);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [path, isCompleted]);

  // Touch/Mouse interaction handlers
  const handleCellPointerDown = (r, c) => {
    if (isCompleted) return;
    
    // 1. If click on start, reset path to start
    if (r === level.start.r && c === level.start.c) {
      setPath([{ r, c }]);
      setIsDrawing(true);
      playClick();
      return;
    }

    const last = path[path.length - 1];
    
    // 2. Check if clicked cell is already in path
    const pathIdx = path.findIndex((cell) => cell.r === r && cell.c === c);
    if (pathIdx !== -1) {
      // Backtrack to this cell (erase future steps)
      setPath(path.slice(0, pathIdx + 1));
      setIsDrawing(true);
      playClick();
      return;
    }

    // 3. If they click an adjacent cell, check if valid and add
    const dr = r - last.r;
    const dc = c - last.c;
    const isAdjacent = (Math.abs(dr) === 1 && dc === 0) || (Math.abs(dc) === 1 && dr === 0);

    if (isAdjacent) {
      tryAddCell(r, c);
      setIsDrawing(true);
    }
  };

  const handleCellPointerEnter = (r, c) => {
    if (isDrawing) {
      tryAddCell(r, c);
    }
  };

  const handleBoardPointerUp = () => {
    setIsDrawing(false);
  };

  // Reset Level
  const handleRestart = () => {
    playClick();
    setPath([{ r: level.start.r, c: level.start.c }]);
    setIsCompleted(false);
    setTimeSpent(0);
    // Restart timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
  };

  // Undo last step
  const handleUndo = () => {
    if (path.length > 1 && !isCompleted) {
      playClick();
      setPath(path.slice(0, -1));
    }
  };

  // Render arrows inside cells
  const renderArrow = (direction) => {
    switch (direction) {
      case 'up': return <ArrowUp className="arrow-icon" />;
      case 'down': return <ArrowDown className="arrow-icon" />;
      case 'left': return <ArrowLeft className="arrow-icon" />;
      case 'right': return <ArrowRight className="arrow-icon" />;
      default: return null;
    }
  };

  // Format time
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Generate SVG path coordinates from path cells
  const getSvgPathData = () => {
    if (path.length === 0) return '';
    const cellWidth = 100 / level.cols;
    const cellHeight = 100 / level.rows;
    
    return path
      .map((cell, idx) => {
        const x = (cell.c + 0.5) * cellWidth;
        const y = (cell.r + 0.5) * cellHeight;
        return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  // Get list of valid next cells
  const getValidNextMoves = () => {
    if (isCompleted || path.length === 0) return [];
    const last = path[path.length - 1];
    const moves = [
      { r: last.r - 1, c: last.c }, // Up
      { r: last.r + 1, c: last.c }, // Down
      { r: last.r, c: last.c - 1 }, // Left
      { r: last.r, c: last.c + 1 }  // Right
    ];
    return moves.filter(
      (m) =>
        isValidMove(last, m) &&
        !path.some((p) => p.r === m.r && p.c === m.c)
    );
  };

  const nextMoves = getValidNextMoves();

  return (
    <div className="game-layout" onPointerUp={handleBoardPointerUp}>
      {/* Game Header Panel */}
      <div className="game-header-controls">
        <div className="level-info">
          <span className="level-title">Level {level.id}</span>
          <span className="level-subtitle">{level.name}</span>
        </div>
        <div className="game-stats">
          <div className="game-stat">
            <span className="game-stat-val">{formatTime(timeSpent)}</span>
            <span className="game-stat-lbl">Timer</span>
          </div>
          <div className="game-stat">
            <span className="game-stat-val">{level.rows}x{level.cols}</span>
            <span className="game-stat-lbl">Grid</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Board */}
      <div 
        ref={boardRef}
        className={`board-container ${shake ? 'shake' : ''}`}
      >
        <div 
          className="grid-board"
          style={{
            gridTemplateRows: `repeat(${level.rows}, 1fr)`,
            gridTemplateColumns: `repeat(${level.cols}, 1fr)`
          }}
        >
          {level.grid.map((row, r) =>
            row.map((cell, c) => {
              const isStart = r === level.start.r && c === level.start.c;
              const isEnd = r === level.end.r && c === level.end.c;
              const isPathCell = path.some((pt) => pt.r === r && pt.c === c);
              const isNextMoveValid = nextMoves.some((m) => m.r === r && m.c === c);
              
              return (
                <div
                  key={`${r}-${c}`}
                  className={`grid-cell ${cell.type} ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''} ${isPathCell ? 'highlight-arrow' : ''} ${isNextMoveValid ? 'valid-next-move' : ''}`}
                  onPointerDown={() => handleCellPointerDown(r, c)}
                  onPointerEnter={() => handleCellPointerEnter(r, c)}
                >
                  {isStart && <span className="start-indicator">Start</span>}
                  {isEnd && <span className="end-indicator">Exit</span>}
                  {!isStart && !isEnd && cell.arrow && renderArrow(cell.arrow)}
                </div>
              );
            })
          )}
        </div>

        {/* SVG Drawing layer overlays grid board */}
        <svg className="svg-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          {path.length > 1 && (
            <>
              {/* Outer stroke shadow for thickness glow */}
              <path className="path-segment-shadow" d={getSvgPathData()} />
              {/* Core neon path line */}
              <path className="path-line" d={getSvgPathData()} />
            </>
          )}
        </svg>
      </div>

      <div className="tutorial-banner">
        <span>👉 Tap adjacent dashed blocks to draw path to the EXIT!</span>
      </div>

      {/* Action buttons below grid board */}
      <div className="board-controls">
        <div className="control-group">
          <button className="icon-btn" onClick={onBack} title="Back to Lobby">
            <X size={20} />
          </button>
          <button className="icon-btn" onClick={onToggleCreatorMode} title="Creator Reels Mode">
            <Video size={20} style={{ color: 'var(--neon-pink)' }} />
          </button>
        </div>
        <div className="control-group">
          <button className="icon-btn" onClick={handleUndo} title="Undo step">
            <Undo2 size={20} />
          </button>
          <button className="icon-btn" onClick={handleRestart} title="Restart level">
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {/* Win Modal Card overlay */}
      {isCompleted && (
        <div className="popup-overlay">
          <div className="popup-card glass-panel">
            <h2 className="popup-title">GRID CLEARED!</h2>
            <p className="popup-description">You completed Level {level.id} successfully.</p>
            
            <div className="win-stars">
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  size={32}
                  fill={s <= stars ? 'var(--neon-yellow)' : 'none'}
                  stroke={s <= stars ? 'var(--neon-yellow)' : 'rgba(255,255,255,0.2)'}
                  style={{ animationDelay: `${s * 0.1}s` }}
                />
              ))}
            </div>

            <div className="popup-stats">
              <div>
                <div className="game-stat-val" style={{ color: 'white' }}>{formatTime(timeSpent)}</div>
                <div className="game-stat-lbl">Time Taken</div>
              </div>
              <div>
                <div className="game-stat-val" style={{ color: 'white' }}>{stars}/3</div>
                <div className="game-stat-lbl">Stars Rating</div>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ margin: '0 auto', width: '150px', justifyContent: 'center' }}
              onClick={onBack}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Back to Lobby'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
