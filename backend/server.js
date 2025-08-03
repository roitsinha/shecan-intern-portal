const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const internData = {
  name: "Rohit Sinha",
  referralCode: "rohitsinha2025",
  totalDonations: 9500,
  currentReferrals: 5,
  nextTierReferrals: 15,
  currentTier: "Bronze",
  nextTier: "Silver",
  ranking: 4,
  childrenHelped: 12,
  schoolsSupported: 3,
  recentActivity: [
    "New referral: Priya Sharma",
    "Donation received: ₹500",
    "Reached Bronze Tier",
  ],
};

const leaderboard = [
  { name: "Rohit Sinha", referralCode: "rohitsinha2025", donations: 9500, highlight: true },
  { name: "Priya Mehta", referralCode: "priyamehta2025", donations: 8500, highlight: false },
  { name: "Aman Gupta", referralCode: "amangupta2025", donations: 7200, highlight: false },
];

app.get("/api/intern", (req, res) => {
  res.json(internData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboard);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
