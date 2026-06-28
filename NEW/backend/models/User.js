const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true
  },
  currentLevel: {
    type: Number,
    default: 1
  },
  completedLevels: [
    {
      levelId: {
        type: Number,
        required: true
      },
      timeSpent: {
        type: Number, // in seconds
        required: true
      },
      stars: {
        type: Number,
        default: 3
      },
      completedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
