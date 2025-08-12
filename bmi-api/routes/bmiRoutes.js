// routes/bmiRoutes.js

const express = require('express');
const router = express.Router();
const { users, analytics } = require('../dataStore');

router.post('/', (req, res) => {
  const { name, height, weight } = req.body;

  
  if (!name || !height || !weight || height <= 0 || weight <= 0) {
    return res.status(400).json({ error: 'Name, height, and weight must be positive values.' });
  }

  const bmi = weight / (height * height);
  let category;

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  
  const formattedBmi = parseFloat(bmi.toFixed(2));

  
  users.push({ name, bmi: formattedBmi, category });
  analytics.totalUsers++;
  analytics.totalBMI += formattedBmi;
  analytics.categoryDistribution[category.toLowerCase()]++;

  
  res.status(200).json({ name, bmi: formattedBmi, category });
});

module.exports = router;