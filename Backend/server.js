const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Load city data
const cityDataPath = path.join(__dirname, 'data', 'city_data.json');
const cityData = JSON.parse(fs.readFileSync(cityDataPath, 'utf-8'));

// API to get all cities
app.get('/api/cities', (req, res) => {
  res.json(cityData);
});

// API to get single city by name (e.g. /api/cities/Shimla)
app.get('/api/cities/:cityName', (req, res) => {
  const cityName = req.params.cityName.toLowerCase();
  const city = cityData.find(
    (c) => c.name.toLowerCase() === cityName
  );

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
