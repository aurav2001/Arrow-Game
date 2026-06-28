import React, { useState, useEffect, useRef } from 'react';
import { Heart, ArrowUp, Settings, Clock, Search, Eraser, Grid, ZoomIn, ZoomOut, Star, Volume2, VolumeX } from 'lucide-react';
import { playClick, playError, playWin, playWhoosh } from '../utils/audio';
import { levels } from '../levels';

const API_URL = 'http://localhost:5000/api';

export default function GameBoard({ levelId, onBack, onProgressSaved }) {
  const level = levels.find((l) => l.id === levelId) || levels[0];

  const [escapedShapeIds, setEscapedShapeIds] = useState([]);
  const [blockedShakeShapeId, setBlockedShakeShapeId] = useState(null);
  const [screenFlash, setScreenFlash] = useState(false);
  const [lives, setLives] = useState(3);
  const [movesLeft, setMovesLeft] = useState(120); // starts at 120 moves
  const [timeSpent, setTimeSpent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [stars, setStars] = useState(3);
  const [saving, setSaving] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hintShapeId, setHintShapeId] = useState(null);
  const [shapeCells, setShapeCells] = useState({});

  const timerRef = useRef(null);
  const activeIntervalsRef = useRef([]);

  // Timer & Moves setup
  useEffect(() => {
    handleResetState();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      activeIntervalsRef.current.forEach(clearInterval);
    };
  }, [levelId]);

  const handleResetState = () => {
    activeIntervalsRef.current.forEach(clearInterval);
    activeIntervalsRef.current = [];

    setEscapedShapeIds([]);
    setBlockedShakeShapeId(null);
    setScreenFlash(false);
    setLives(3);
    setMovesLeft(120);
    setTimeSpent(0);
    setIsCompleted(false);
    setIsGameOver(false);
    setHintShapeId(null);

    // Reset shape cells to original
    const initialCells = {};
    level.shapes.forEach((s) => {
      initialCells[s.id] = [...s.cells];
    });
    setShapeCells(initialCells);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
  };

  // Helper to dynamically get exit direction from path
  const getExitDir = (shape) => {
    if (!shape.cells || shape.cells.length < 2) return shape.exitDir;
    const last = shape.cells[shape.cells.length - 1];
    const prev = shape.cells[shape.cells.length - 2];
    if (last.x > prev.x) return 'right';
    if (last.x < prev.x) return 'left';
    if (last.y > prev.y) return 'down';
    if (last.y < prev.y) return 'up';
  };

  // Helper to get the center of the shape
  const getShapeCenter = (shape) => {
    if (!shape.cells || shape.cells.length === 0) return { x: 200, y: 200 };
    const xs = shape.cells.map((c) => c.x * 20 + 10);
    const ys = shape.cells.map((c) => c.y * 20 + 10);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    return {
      x: (minX + maxX) / 2,
      y: (minY + maxY) / 2,
    };
  };

  // Helper to check if a grid cell intersects with any segment of a shape
  const cellIntersectsShape = (x, y, shape) => {
    if (!shape.cells || shape.cells.length === 0) return false;
    
    // Check if cell matches any vertex exactly
    const exactMatch = shape.cells.some((c) => c.x === x && c.y === y);
    if (exactMatch) return true;

    // Check if cell lies on any straight segment connecting consecutive vertices
    for (let i = 0; i < shape.cells.length - 1; i++) {
      const A = shape.cells[i];
      const B = shape.cells[i + 1];
      if (A.y === B.y) {
        // Horizontal segment
        const minX = Math.min(A.x, B.x);
        const maxX = Math.max(A.x, B.x);
        if (y === A.y && x >= minX && x <= maxX) {
          return true;
        }
      } else if (A.x === B.x) {
        // Vertical segment
        const minY = Math.min(A.y, B.y);
        const maxY = Math.max(A.y, B.y);
        if (x === A.x && y >= minY && y <= maxY) {
          return true;
        }
      }
    }
    return false;
  };

  // Check if shape can slide off the 20x20 board indefinitely
  const checkIsBlocked = (shape, activeShapes) => {
    const exitDir = getExitDir(shape);
    const dx = exitDir === 'left' ? -1 : exitDir === 'right' ? 1 : 0;
    const dy = exitDir === 'up' ? -1 : exitDir === 'down' ? 1 : 0;

    // The shape only exits straight out from its front/head cell (the last cell in cells array)
    const headCell = shape.cells[shape.cells.length - 1];

    let step = 1;
    const maxSteps = 22; // 20x20 grid, 22 steps is guaranteed out of bounds

    while (step <= maxSteps) {
      const nx = headCell.x + dx * step;
      const ny = headCell.y + dy * step;

      // If shifted coordinate is inside grid
      if (nx >= 0 && nx < 20 && ny >= 0 && ny < 20) {
        // Check collision with another active shape
        const hitOther = activeShapes.some(
          (other) =>
            other.id !== shape.id &&
            cellIntersectsShape(nx, ny, other)
        );
        if (hitOther) {
          return true; // Blocked!
        }
      } else {
        // If it goes out of bounds without hit, it's free to escape
        break;
      }
      step++;
    }
    return false; // Free to escape!
  };

  // Placeholder function to check if a path is unblocked (can exit the grid)
  const isPathUnblocked = (shape, activeShapes) => {
    return !checkIsBlocked(shape, activeShapes);
  };

  // Placeholder function to reduce lives on error
  const handleReduceLivesOnError = () => {
    setLives((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        handleGameOver();
      }
      return next;
    });
  };

  // Placeholder function to decrement move count
  const handleDecrementMoves = () => {
    setMovesLeft((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        handleGameOver();
      }
      return next;
    });
  };

  const handleShapeClick = (shape) => {
    if (isCompleted || isGameOver || escapedShapeIds.includes(shape.id)) return;

    // Decrement the move count '15/120'
    handleDecrementMoves();

    const activeShapes = level.shapes.filter((s) => !escapedShapeIds.includes(s.id));
    
    // Check if the path is unblocked (able to exit the grid)
    const unblocked = isPathUnblocked(shape, activeShapes);

    if (!unblocked) {
      // Collision/Error: reduce lives
      handleReduceLivesOnError();
      
      if (soundEnabled) playError();
      setScreenFlash(true);
      setBlockedShakeShapeId(shape.id);

      setTimeout(() => {
        setScreenFlash(false);
        setBlockedShakeShapeId(null);
      }, 300);
    } else {
      // Free to escape whoosh!
      if (soundEnabled) playWhoosh();
      setHintShapeId(null);
      const updatedEscaped = [...escapedShapeIds, shape.id];
      setEscapedShapeIds(updatedEscaped);
      startEscapeAnimation(shape);

      // Check win
      if (updatedEscaped.length === level.shapes.length) {
        handleComplete();
      }
    }
  };

  const startEscapeAnimation = (shape) => {
    const exitDir = getExitDir(shape);
    const intervalTime = 30; // 30ms step for very fast, smooth crawling sliding!
    
    const interval = setInterval(() => {
      setShapeCells((prev) => {
        const current = prev[shape.id] ? [...prev[shape.id]] : [...shape.cells];
        if (current.length === 0) {
          clearInterval(interval);
          activeIntervalsRef.current = activeIntervalsRef.current.filter((i) => i !== interval);
          return prev;
        }

        // Shift the cells (crawling forward along winding paths)
        current.shift();

        if (current.length > 0) {
          const last = current[current.length - 1];
          let nextX = last.x;
          let nextY = last.y;
          
          if (exitDir === 'up') nextY -= 1;
          else if (exitDir === 'down') nextY += 1;
          else if (exitDir === 'left') nextX -= 1;
          else if (exitDir === 'right') nextX += 1;

          current.push({ x: nextX, y: nextY });
        }

        // Check if all cells have fully exited the 20x20 board area
        const allExited = current.every(
          (c) => c.x < 0 || c.x >= 20 || c.y < 0 || c.y >= 20
        );

        if (allExited || current.length === 0) {
          clearInterval(interval);
          activeIntervalsRef.current = activeIntervalsRef.current.filter((i) => i !== interval);
          return {
            ...prev,
            [shape.id]: []
          };
        }

        return {
          ...prev,
          [shape.id]: current
        };
      });
    }, intervalTime);

    activeIntervalsRef.current.push(interval);
  };

  const handleComplete = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCompleted(true);
    if (soundEnabled) playWin();

    // Calculate stars
    let finalStars = 3;
    const thresh = level.shapes.length * 10;
    if (timeSpent > thresh) finalStars = 1;
    else if (timeSpent > thresh / 2) finalStars = 2;
    setStars(finalStars);

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

  const handleGameOver = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsGameOver(true);
    if (soundEnabled) playError();
  };

  const handleHintClick = () => {
    playClick();
    const activeShapes = level.shapes.filter((s) => !escapedShapeIds.includes(s.id));
    const freeShape = activeShapes.find((s) => !checkIsBlocked(s, activeShapes));
    if (freeShape) {
      setHintShapeId(freeShape.id);
      setTimeout(() => {
        setHintShapeId(null);
      }, 2000);
    }
  };

  // Convert cells coordinates to SVG path 'd' string
  // Grid space is 400x400. In 20x20 grid, each cell center is cell*20 + 10.
  const getPathD = (cells) => {
    if (!cells || cells.length === 0) return '';
    return cells
      .map((cell, idx) => {
        const x = cell.x * 20 + 10;
        const y = cell.y * 20 + 10;
        return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m${s.toString().padStart(2, '0')}s`;
  };

  // Move count display formatted as 'movesRemaining/120'
  const moveCountDisplay = `${movesLeft}/120`;

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[480px] p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl relative overflow-hidden">
      {screenFlash && <div className="screen-flash-red" />}

      {/* Header Row */}
      <div className="w-full flex justify-between items-center px-1">
        {/* Decrementing Move Count capsule (e.g. 15/120) */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full font-bold text-sm">
          <ArrowUp className="w-4 h-4 stroke-[3]" />
          <span>{moveCountDisplay}</span>
        </div>

        {/* Center Level Title + Hearts */}
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-slate-100 text-lg leading-tight">Lv.{level.id}</span>
          <div className="flex gap-0.5 mt-0.5">
            {[1, 2, 3].map((h) => (
              <Heart
                key={h}
                className={`w-5 h-5 transition-transform duration-300 ${h <= lives ? 'text-rose-500 fill-rose-500 scale-100' : 'text-slate-700 scale-90'}`}
                fill={h <= lives ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>

        {/* Right Settings gear + Log in capsules */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button className="p-2 bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 rounded-full shadow-sm text-slate-300 hover:text-white transition" onClick={onBack} title="Back to Lobby">
            <Settings size={16} />
          </button>
          <button className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 rounded-xl shadow-sm text-slate-300 font-bold text-xs transition" onClick={onBack}>
            Log in
          </button>
        </div>
      </div>

      {/* Gold Timer capsule */}
      <div className="flex items-center gap-1.5 px-4 py-1 bg-amber-500/10 text-amber-400 rounded-full font-semibold text-xs border border-amber-500/20">
        <Clock className="w-3.5 h-3.5" />
        <span>{formatTime(timeSpent)}</span>
      </div>

      {/* White Square Board using 20x20 scaling */}
      <div className="relative w-full aspect-square max-w-[380px] bg-slate-950/40 border border-white/5 rounded-2xl shadow-2xl overflow-hidden p-2">
        <div className="w-full h-full bg-slate-950 rounded-xl overflow-hidden shadow-inner relative">
          
          <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ touchAction: 'none' }}>
            <defs>
              {/* White dots grid pattern matching image_5.png on light blue-grey */}
              <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#ffffff" opacity="0.12" />
              </pattern>
              
              {/* Arrow Marker definition applied to markerEnd */}
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 2.5 L 8 5 L 0 7.5 z" fill="white" />
              </marker>
            </defs>

            {/* Grid Pattern Background in Light Blue-Grey */}
            <rect width="100%" height="100%" fill="#131826" />
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />

            {/* Draw Winding Paths strictly using SVG <path> elements */}
            {level.shapes.map((shape) => {
              const isEscaped = escapedShapeIds.includes(shape.id);
              const isShaking = blockedShakeShapeId === shape.id;
              const isHinted = hintShapeId === shape.id;

              const exitDir = getExitDir(shape);
              const center = getShapeCenter(shape);
              const originStr = `${center.x}px ${center.y}px`;
              const escapeClass = isEscaped ? 'escaping' : '';

              return (
                <g
                  key={shape.id}
                  className={`game-track-group ${isShaking ? 'blocked-shake' : ''} ${escapeClass}`}
                  style={{
                    transformOrigin: originStr,
                  }}
                >
                  {/* Clean SVG <path> as specified for the path bodies */}
                  <path
                    d={getPathD(shapeCells[shape.id] || shape.cells)}
                    fill="none"
                    stroke={isShaking ? 'var(--neon-pink)' : isHinted ? 'var(--neon-green)' : '#ffffff'}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    markerEnd="url(#arrow)"
                    className="cursor-pointer transition-colors duration-200"
                    onClick={() => handleShapeClick(shape)}
                  />
                  
                  {/* Thick transparent stroke for easy touch hitboxes */}
                  <path
                    d={getPathD(shapeCells[shape.id] || shape.cells)}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer pointer-events-auto"
                    onClick={() => handleShapeClick(shape)}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Same-To-Same Bottom Utility Buttons */}
      <div className="board-controls">
        <div className="control-group">
          <button className="icon-btn-square" onClick={handleHintClick} title="Show Hint">
            <Search size={22} />
            <span className="badge-plus">+</span>
          </button>
          <button className="icon-btn-square" onClick={handleResetState} title="Reset Level">
            <Eraser size={22} />
          </button>
          <button className="icon-btn-square" onClick={onBack} title="Back to Menu Lobby">
            <Grid size={22} />
          </button>
        </div>

        <div className="zoom-controls">
          <button
            className="zoom-btn-small"
            onClick={() => { if (soundEnabled) playClick(); setSoundEnabled(!soundEnabled); }}
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button className="zoom-btn-small" onClick={playClick} title="Zoom In">
            <ZoomIn size={16} />
          </button>
          <button className="zoom-btn-small" onClick={playClick} title="Zoom Out">
            <ZoomOut size={16} />
          </button>
        </div>
      </div>

      {/* Game Over Modal */}
      {isGameOver && (
        <div className="popup-overlay">
          <div className="popup-card glass-panel" style={{ border: '2px solid var(--neon-pink)' }}>
            <h2 className="popup-title" style={{ background: 'linear-gradient(135deg, var(--neon-pink), var(--neon-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              GAME OVER
            </h2>
            <p className="popup-description">You ran out of moves or lives! The tracks collided.</p>

            <div className="popup-stats" style={{ justifyContent: 'center', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <div>
                <div className="game-stat-val" style={{ color: 'var(--text-primary)' }}>
                  {escapedShapeIds.length}/{level.shapes.length}
                </div>
                <div className="game-stat-lbl">Tracks Cleared</div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ margin: '0 auto', width: '150px', justifyContent: 'center' }}
              onClick={handleResetState}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Level Complete / Win Modal */}
      {isCompleted && (
        <div className="popup-overlay">
          <div className="popup-card glass-panel">
            <h2 className="popup-title">GRID CLEARED!</h2>
            <p className="popup-description">You successfully cleared all paths.</p>

            <div className="win-stars">
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  size={28}
                  fill={s <= stars ? 'var(--neon-yellow)' : 'none'}
                  stroke={s <= stars ? 'var(--neon-yellow)' : 'rgba(0,0,0,0.1)'}
                />
              ))}
            </div>

            <div className="popup-stats" style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <div>
                <div className="game-stat-val" style={{ color: 'var(--text-primary)' }}>{formatTime(timeSpent)}</div>
                <div className="game-stat-lbl">Time Taken</div>
              </div>
              <div>
                <div className="game-stat-val" style={{ color: 'var(--text-primary)' }}>{stars}/3</div>
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
