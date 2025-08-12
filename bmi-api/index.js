

const express = require('express');
const app = express();
const port = 3000;


const bmiRoutes = require('./routes/bmiRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');


app.use(express.json());


app.use('/bmi', bmiRoutes);
app.use('/analytics', analyticsRoutes);

app.get('/', (req, res) => {
  res.send('BMI Calculator API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});