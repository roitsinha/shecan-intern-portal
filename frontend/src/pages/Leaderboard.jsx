import React, { useEffect, useState } from "react";
import { getLeaderboardData } from "../api/dummyData";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLeaderboardData()
      .then((data) => {
        setLeaders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load leaderboard:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (!leaders.length) return <p>No leaderboard data found.</p>;

  return (
    <div className="leaderboard-container" style={styles.container}>
      <h1>🏆 Leaderboard</h1>
      <ol style={styles.list}>
        {leaders.map((person, index) => (
          <li key={index} style={styles.item}>
            <strong>{person.name}</strong> — ₹{person.donations}
          </li>
        ))}
      </ol>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  list: {
    paddingLeft: "20px",
  },
  item: {
    margin: "10px 0",
  },
};

export default Leaderboard;
