import React, { useState } from 'react';
import { Gamepad2, ArrowRight } from 'lucide-react';
import { playClick } from '../utils/audio';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Auth({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick();
    setError('');
    setLoading(true);

    if (username.length < 3) {
      setError('Username must be at least 3 characters.');
      setLoading(false);
      return;
    }

    if (!isLogin && !email) {
      setError('Email is required for registration.');
      setLoading(false);
      return;
    }

    if (password.length < 4) {
      setError('Password must be at least 4 characters.');
      setLoading(false);
      return;
    }

    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    const bodyObj = isLogin ? { username, password } : { username, email, password };

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      });

      let data;
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { msg: text || 'Server error' };
      }

      if (!response.ok) {
        throw new Error(data.msg || 'Authentication failed');
      }

      localStorage.setItem('token', data.token);
      onAuthSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    playClick();
    setIsLogin(!isLogin);
    setError('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-panel">
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Gamepad2 className="logo-icon" size={32} />
          <span>ARROW MAZE</span>
        </div>

        <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Join the Race'}</h2>
        <p className="auth-subtitle">
          {isLogin ? 'Log in to resume your levels' : 'Create an account to track your scores'}
        </p>

        {error && <div className="alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email / Gmail</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
          )}

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
            {loading ? 'Processing...' : isLogin ? 'Launch Game' : 'Create Account'}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="auth-toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="auth-toggle-link" onClick={toggleMode}>
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </div>

      <p className="dev-credit">
        Developed with ❤️ by <span className="dev-credit-name">Gaurav Pandey</span>
      </p>
    </div>
  );
}
