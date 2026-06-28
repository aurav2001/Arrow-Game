# 🎮 Arrow Maze - Cybernetic Grid Game

Arrow Maze is an immersive, high-logic grid-crawling puzzle game built with a modern **React (Vite) frontend** and a secure **Node.js/Express backend**. It features a stunning dark cyber glassmorphic UI, custom level creation, and live leaderboard progress tracking.

![Aesthetic Preview](https://img.shields.io/badge/Theme-Dark%20Cyber%20Glassmorphism-blueviolet?style=for-the-badge)
![React Version](https://img.shields.io/badge/Frontend-React%20%2B%20Vite%20%2B%20Lucide-00f3ff?style=for-the-badge)
![Backend Version](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-bd00ff?style=for-the-badge)
![Database](https://img.shields.io/badge/Database-MongoDB%20%2B%20LocalJSON%20Fallback-2ecc71?style=for-the-badge)

---

## 🌟 Key Features

1. **Cyberpunk Dark Glassmorphic Design**: An immersive neon cyberpunk interface with fluid hover transitions, mesh gradients, and glowing 3D-depth tracks.
2. **10 Logic-Heavy Levels**: From basic mechanics to circular locks, keyholes, double helices, and the ultimate 11-shape Grand Master Chessboard quadrant challenge.
3. **Advanced Segment-Based Collision Detection**: Bulletproof line collision detection that prevents clipping through intermediate coordinates on long straight tracks.
4. **Admin/Developer Audit System**: Automatic logs of all registration and login events (including Email/Gmail capture) written to console and persistently appended to `backend/audit_logs.txt`.
5. **Zero-Setup Offline Database Fallback**: Built-in automatic database fallback (`backend/db.json`) if MongoDB Atlas goes offline, guaranteeing 100% uptime out of the box.

---

## 📁 Repository Structure

- `/frontend` - React SPA (Vite, Tailwind, Lucide React, CSS modules)
- `/backend` - Express API Server (Mongoose models, JWT auth, audit logging, JSON DB fallback)
- `wordpress_amc_widget.html` - Embedded game widget integration file

---

## 🚀 Local Quickstart

### 1. Clone the repository
```bash
git clone https://github.com/aurav2001/Arrow-Game.git
cd Arrow-Game
```

### 2. Start the Backend Server
```bash
cd backend
npm install
npm run dev
```
*Runs on `http://localhost:5000` by default. Creates local fallback `db.json` database automatically.*

### 3. Start the Frontend Dev Server
```bash
cd ../frontend
npm install
npm run dev
```
*Runs on `http://localhost:5173`. Open your browser to begin playing!*

---

## ☁️ Deployment Guide

### Frontend Deployment (Vercel)
The frontend can be deployed to Vercel in 1 click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faurav2001%2FArrow-Game&root-directory=frontend)

1. Sign in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** > **Project** and select this imported GitHub repository.
3. In the project settings:
   - Set **Framework Preset** to `Vite`.
   - Set **Root Directory** to `frontend`.
4. Click **Deploy**.

### Backend Deployment (Render / Railway)
To deploy the backend server persistently:
1. Create a free Web Service on [Render](https://render.com) or [Railway](https://railway.app).
2. Set the build command to `npm install` and start command to `node server.js` (inside `/backend`).
3. Add environment variables:
   - `PORT` = `5000`
   - `JWT_SECRET` = `your_secure_secret_key`
   - `MONGO_URI` = `your_mongodb_atlas_connection_string` (to ensure persistent user progress in the cloud).
