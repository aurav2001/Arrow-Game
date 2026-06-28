import React, { useState } from 'react';
import { X, Palette, Type, Smartphone } from 'lucide-react';
import { playClick } from '../utils/audio';
import GameBoard from './GameBoard';

export default function CreatorMode({ onExit }) {
  const [selectedTheme, setSelectedTheme] = useState('cyberpunk');
  const [hookText, setHookText] = useState('ONLY 1% CAN SOLVE THIS!');
  const [subtitleText, setSubtitleText] = useState('Can you find the exit path?');
  const [socialHandle, setSocialHandle] = useState('@arrow_maze_master');
  const [activeLevelId, setActiveLevelId] = useState(1);

  const handleThemeChange = (theme) => {
    playClick();
    setSelectedTheme(theme);
  };

  const handleLevelChange = (lvlId) => {
    playClick();
    setActiveLevelId(lvlId);
  };

  return (
    <div className="creator-container">
      <div className="creator-panel-layout">
        {/* Left Side: 9:16 Phone Frame Mockup for Screen Recording */}
        <div className={`creator-frame bg-filter-${selectedTheme}`}>
          <div className="creator-header-hook">
            <h3 className="creator-title-hook">{hookText}</h3>
            <p className="creator-subtitle-hook">{subtitleText}</p>
          </div>

          {/* Interactive Game Board inside the Recording Frame */}
          <div className="creator-game-wrapper">
            <GameBoard
              levelId={activeLevelId}
              onBack={onExit}
              onProgressSaved={() => {}}
              onToggleCreatorMode={() => {}}
            />
          </div>

          <div className="creator-footer-tag">
            <span>Play Now • {socialHandle}</span>
          </div>
        </div>

        {/* Right Side: Creator Customization Tools */}
        <div className="creator-control-panel glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 className="creator-control-title">Creator Console</h2>
            <button className="icon-btn" onClick={onExit} title="Exit Creator Mode">
              <X size={20} />
            </button>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Set up this vertical layout, type a viral hook, and start recording your screen for Instagram Reels or YouTube Shorts!
          </p>

          {/* 1. Select Theme */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Palette size={14} /> Color Theme
            </label>
            <div className="theme-options">
              {['cyberpunk', 'lava', 'emerald', 'sunset'].map((t) => (
                <button
                  key={t}
                  className={`theme-btn ${selectedTheme === t ? 'active' : ''}`}
                  onClick={() => handleThemeChange(t)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Viral Hooks */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Type size={14} /> Main Caption Hook
            </label>
            <input
              type="text"
              className="input-hook"
              value={hookText}
              onChange={(e) => setHookText(e.target.value)}
              placeholder="e.g. 99% PEOPLE FAIL THIS!"
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Type size={14} /> Subtitle Hook
            </label>
            <input
              type="text"
              className="input-hook"
              value={subtitleText}
              onChange={(e) => setSubtitleText(e.target.value)}
              placeholder="e.g. Trace the path to exit"
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Smartphone size={14} /> Social Tag
            </label>
            <input
              type="text"
              className="input-hook"
              value={socialHandle}
              onChange={(e) => setSocialHandle(e.target.value)}
              placeholder="e.g. @your_instagram"
            />
          </div>

          {/* 3. Level Switcher */}
          <div className="form-group">
            <label className="form-label">Level Preview</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[1, 2, 3, 4, 5].map((lvl) => (
                <button
                  key={lvl}
                  className={`theme-btn ${activeLevelId === lvl ? 'active' : ''}`}
                  onClick={() => handleLevelChange(lvl)}
                  style={{ width: '40px' }}
                >
                  L{lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
