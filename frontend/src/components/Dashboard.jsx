import React, { useState, useEffect } from 'react';
import { LogOut, Trophy, Play, Video, Star, Lock, CheckCircle, Target } from 'lucide-react';
import { playClick } from '../utils/audio';
import { levels } from '../levels';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Dashboard({ user, onSelectLevel, onLogout, onToggleCreatorMode }) {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    setLoadingLeaderboard(true);
    try {
      const response = await fetch(`${API_URL}/game/leaderboard`);
      if (response.ok) {
        const data = await response.json();
        setLeaderboardData(data);
      }
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
    } finally {
      setLoadingLeaderboard(false);
    }
  };

  useEffect(() => {
    if (showLeaderboard) {
      fetchLeaderboard();
    }
  }, [showLeaderboard]);

  const handleLeaderboardToggle = () => {
    playClick();
    setShowLeaderboard(!showLeaderboard);
  };

  const handleLevelClick = (lvlId) => {
    if (lvlId > user.currentLevel) return;
    playClick();
    onSelectLevel(lvlId);
  };

  const getLevelStars = (lvlId) => {
    const comp = user.completedLevels?.find((c) => c.levelId === lvlId);
    return comp ? comp.stars : 0;
  };

  const totalStars = user.completedLevels?.reduce((acc, curr) => acc + curr.stars, 0) || 0;
  const levelsCompleted = user.completedLevels?.length || 0;

  return (
    <div className="dashboard-container">
      {/* Welcome Hero Banner */}
      <div className="welcome-banner glass-panel">
        <div className="welcome-info">
          <h1>Hello, {user.username}!</h1>
          <p>Welcome back to the Vector Grid. Ready to test your pathing?</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleLevelClick(user.currentLevel > levels.length ? levels.length : user.currentLevel)}
          style={{ padding: '0.75rem 1.5rem', borderRadius: '14px', flexShrink: 0 }}
        >
          <Play size={18} fill="white" />
          Quick Start
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <Target className="stat-card-icon text-blue-400" size={20} />
          <span className="stat-value">{user.currentLevel}</span>
          <span className="stat-label">Current Level</span>
        </div>
        <div className="stat-card glass-panel">
          <CheckCircle className="stat-card-icon text-emerald-400" size={20} />
          <span className="stat-value">{levelsCompleted}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card glass-panel">
          <Star className="stat-card-icon text-amber-400" size={20} fill="currentColor" />
          <span className="stat-value" style={{ color: 'var(--neon-yellow)' }}>{totalStars}</span>
          <span className="stat-label">Total Stars</span>
        </div>
      </div>

      {/* Level Select Section */}
      <div className="level-select-section">
        <div className="section-header">
          <h2>Select Level</h2>
          <div className="action-buttons">
            <button className="btn btn-secondary-icon" onClick={onToggleCreatorMode}>
              <Video size={16} />
              <span>Creator Mode</span>
            </button>
            <button className="btn btn-secondary-icon" onClick={handleLeaderboardToggle}>
              <Trophy size={16} />
              <span>Leaderboard</span>
            </button>
          </div>
        </div>
        <div className="levels-grid">
          {levels.map((lvl) => {
            const isUnlocked = lvl.id <= user.currentLevel;
            const stars = getLevelStars(lvl.id);
            
            return (
              <div
                key={lvl.id}
                className={`level-card glass-panel ${!isUnlocked ? 'locked' : ''}`}
                onClick={() => handleLevelClick(lvl.id)}
              >
                <span className="level-num">{lvl.id}</span>
                {isUnlocked ? (
                  <div className="level-stars">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        fill={s <= stars ? 'var(--neon-yellow)' : 'none'}
                        stroke={s <= stars ? 'var(--neon-yellow)' : 'rgba(255,255,255,0.2)'}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="locked-icon">
                    <Lock size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions footer */}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <button className="btn btn-danger" onClick={onLogout}>
          <LogOut size={16} />
          Log Out
        </button>
      </div>

      {/* Leaderboard Modal */}
      {showLeaderboard && (
        <div className="popup-overlay" onClick={handleLeaderboardToggle}>
          <div className="popup-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <h2 className="popup-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Trophy size={28} /> Global Leaderboard
            </h2>
            <p className="popup-description">Top cyber runners in the system</p>
            
            {loadingLeaderboard ? (
              <p style={{ color: 'var(--text-secondary)' }}>Loading rankings...</p>
            ) : (
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Player</th>
                      <th>Level</th>
                      <th>Stars</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((player, idx) => (
                      <tr key={player._id}>
                        <td>#{idx + 1}</td>
                        <td>{player.username}</td>
                        <td>Lvl {player.currentLevel}</td>
                        <td style={{ color: 'var(--neon-yellow)' }}>★ {player.totalStars}</td>
                      </tr>
                    ))}
                    {leaderboardData.length === 0 && (
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                          No runners recorded yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
            
            <button className="btn" style={{ margin: '1.5rem auto 0 auto' }} onClick={handleLeaderboardToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
