const express = require('express');
const router = express.Router();
const { analytics } = require('../dataStore');

router.get('/', (req, res) => {
  let averageBMI = 0;
  if (analytics.totalUsers > 0) {
    averageBMI = analytics.totalBMI / analytics.totalUsers;
  }

  
  const formattedAverageBMI = parseFloat(averageBMI.toFixed(2));

  const response = {
    totalUsers: analytics.totalUsers,
    averageBMI: formattedAverageBMI,
    categoryDistribution: analytics.categoryDistribution,
  };

  res.status(200).json(response);
});

module.exports = router;