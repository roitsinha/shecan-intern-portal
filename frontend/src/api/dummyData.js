const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const getInternData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/intern`);
    if (!response.ok) throw new Error("Failed to fetch intern data");
    return await response.json();
  } catch (error) {
    console.error(error);
    // Fallback dummy data
    return {
      name: "Abhishek Sinha",
      referralCode: "abhisheksinha2025",
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
  }
};

export const getLeaderboardData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/leaderboard`);
    if (!response.ok) throw new Error("Failed to fetch leaderboard data");
    return await response.json();
  } catch (error) {
    console.error(error);
    // Fallback dummy leaderboard data
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
        name: "Abhishek Sinha", 
        referralCode: "abhisheksinha2025", 
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
  }
};
