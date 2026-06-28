const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route    POST api/game/save-progress
// @desc     Save level completion progress
// @access   Private
router.post('/save-progress', auth, async (req, res) => {
  const { levelId, timeSpent, stars } = req.body;

  if (levelId === undefined || timeSpent === undefined) {
    return res.status(400).json({ msg: 'Please provide levelId and timeSpent' });
  }

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if level was already completed
    const existingIndex = user.completedLevels.findIndex(
      (lvl) => lvl.levelId === Number(levelId)
    );

    if (existingIndex !== -1) {
      // Level already completed before. Update only if new performance is better (e.g. fewer seconds spent or more stars)
      const prevTime = user.completedLevels[existingIndex].timeSpent;
      const prevStars = user.completedLevels[existingIndex].stars;

      // Update if stars are higher, or if same stars but time is better
      if (stars > prevStars || (stars === prevStars && timeSpent < prevTime)) {
        user.completedLevels[existingIndex].timeSpent = timeSpent;
        user.completedLevels[existingIndex].stars = stars;
        user.completedLevels[existingIndex].completedAt = Date.now();
      }
    } else {
      // Add new completion record
      user.completedLevels.push({
        levelId: Number(levelId),
        timeSpent: Number(timeSpent),
        stars: Number(stars || 3),
        completedAt: Date.now()
      });
    }

    // Update current progress level if user has unlocked the next level
    const nextLevel = Number(levelId) + 1;
    if (nextLevel > user.currentLevel) {
      user.currentLevel = nextLevel;
    }

    await user.save();
    res.json({
      currentLevel: user.currentLevel,
      completedLevels: user.completedLevels
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/game/leaderboard
// @desc     Get top players leaderboard
// @access   Public
router.get('/leaderboard', async (req, res) => {
  try {
    // Sort users by currentLevel (highest first)
    // If levels are equal, we can sort by number of completed levels or date
    const topUsers = await User.find()
      .select('username currentLevel completedLevels')
      .limit(10);

    // Format output for leaderboard rankings
    const leaderboard = topUsers.map((user) => {
      const totalStars = user.completedLevels.reduce((acc, curr) => acc + curr.stars, 0);
      const totalTime = user.completedLevels.reduce((acc, curr) => acc + curr.timeSpent, 0);
      
      return {
        _id: user._id,
        username: user.username,
        currentLevel: user.currentLevel,
        totalStars,
        totalTime
      };
    });

    // Sort formatted leaderboard:
    // 1. Highest level first
    // 2. Most stars first
    // 3. Least total time first
    leaderboard.sort((a, b) => {
      if (b.currentLevel !== a.currentLevel) {
        return b.currentLevel - a.currentLevel;
      }
      if (b.totalStars !== a.totalStars) {
        return b.totalStars - a.totalStars;
      }
      return a.totalTime - b.totalTime;
    });

    res.json(leaderboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
