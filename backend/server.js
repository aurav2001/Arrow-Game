const dns = require('dns');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (err) {
  console.warn('DNS override failed:', err.message);
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/arrow-maze';
mongoose.set('bufferCommands', false);
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected successfully!'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    console.log('Ensure MongoDB is installed and running local instance.');
  });

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/game', require('./routes/game'));

// Health check/welcome route
app.get('/', (req, res) => {
  res.send('Arrow Maze Game API is running.');
});

// Start Server
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

module.exports = app;
