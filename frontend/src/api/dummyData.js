export async function getInternData() {
  const res = await fetch('http://localhost:5000/api/intern');
  return res.json();
}

export async function getLeaderboardData() {
  const res = await fetch('http://localhost:5000/api/leaderboard');
  return res.json();
}
