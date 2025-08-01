const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 

const internData = {
  name: 'Rohit Sinha',
  referralCode: 'rohitsinha2025',
  totalDonations: 9500
};

const leaderboard = [
  { name: 'Rohit Sinha', donations: 9500 },
  { name: 'Priya Mehta', donations: 8500 },
  { name: 'Aman Gupta', donations: 7200 }
];

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
