// src/api/dummyData.js

export const getInternData = async () => {
  return {
    name: "Rohit Sinha",
    referralCode: "rohitsinha2025",
    totalDonations: 4500,
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
      "Reached Bronze Tier"
    ],
    avatar: null
  };
};

// Add this new function for leaderboard data
export const getLeaderboardData = async () => {
  return [
    { 
      name: "Priya Sharma", 
      referralCode: "priyash2025", 
      donations: 5000,
      highlight: false
    },
    { 
      name: "Anjali Singh", 
      referralCode: "anjalis2025", 
      donations: 4200,
      highlight: false
    },
    { 
      name: "Divya Kumar", 
      referralCode: "divyak2025", 
      donations: 3800,
      highlight: false
    },
    { 
      name: "Rohit Sinha", 
      referralCode: "rohitsinha2025", 
      donations: 4500,
      highlight: true  
    },
    { 
      name: "Sneha Patel", 
      referralCode: "snehap2025", 
      donations: 980,
      highlight: false
    }
  ];
};