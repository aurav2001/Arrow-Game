import React, { useState, useEffect } from 'react';
import { Gamepad2, User as UserIcon, LogOut, Video } from 'lucide-react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import GameBoard from './components/GameBoard';
import CreatorMode from './components/CreatorMode';
import { playClick } from './utils/audio';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'game', 'creator'
  const [selectedLevelId, setSelectedLevelId] = useState(1);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('token');
      }
    } catch (err) {
      console.error('Error fetching user:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();

    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setCurrentView(event.state.view);
      } else {
        setCurrentView('dashboard');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleAuthSuccess = () => {
    fetchUser();
  };

  const handleLogout = () => {
    playClick();
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    setCurrentView('dashboard');
  };

  const handleSelectLevel = (levelId) => {
    setSelectedLevelId(levelId);
    setCurrentView('game');
    window.history.pushState({ view: 'game' }, '');
  };

  const handleProgressSaved = (data) => {
    // Update local user state
    setUser((prev) => ({
      ...prev,
      currentLevel: data.currentLevel,
      completedLevels: data.completedLevels,
    }));
  };

  const toggleCreatorMode = () => {
    playClick();
    if (currentView === 'creator') {
      window.history.back();
    } else {
      setCurrentView('creator');
      window.history.pushState({ view: 'creator' }, '');
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p style={{ color: 'var(--neon-cyan)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Loading System Grid...
        </p>
      </div>
    );
  }

  return (
    <>
      {currentView !== 'creator' && (
        <header className="app-header">
          <div className="logo" onClick={() => { playClick(); if (currentView !== 'dashboard') window.history.back(); }} style={{ cursor: 'pointer' }}>
            <Gamepad2 className="logo-icon" size={26} />
            <span>ARROW MAZE</span>
          </div>

          {isAuthenticated && user && (
            <div className="user-status">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <UserIcon size={16} style={{ color: 'var(--neon-cyan)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{user.username}</span>
                <span style={{ color: 'var(--neon-pink)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Lvl {user.currentLevel}
                </span>
              </div>
            </div>
          )}
        </header>
      )}

      <main style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 1rem 3rem 1rem' }}>
        {!isAuthenticated ? (
          <Auth onAuthSuccess={handleAuthSuccess} />
        ) : (
          <>
            {currentView === 'dashboard' && (
              <Dashboard
                user={user}
                onSelectLevel={handleSelectLevel}
                onLogout={handleLogout}
                onToggleCreatorMode={toggleCreatorMode}
              />
            )}
            {currentView === 'game' && (
              <GameBoard
                levelId={selectedLevelId}
                onBack={() => { playClick(); window.history.back(); }}
                onProgressSaved={handleProgressSaved}
                onToggleCreatorMode={toggleCreatorMode}
              />
            )}
            {currentView === 'creator' && (
              <CreatorMode onExit={() => { playClick(); window.history.back(); }} />
            )}
          </>
        )}
      </main>
    </>
  );
}

export default App;
