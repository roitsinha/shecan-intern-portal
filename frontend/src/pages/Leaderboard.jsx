import React, { useEffect, useState } from "react";
import { getLeaderboardData } from "../api/dummyData";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLeaderboardData()
      .then((data) => {
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid leaderboard data");
        }
        setLeaders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load leaderboard:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading leaderboard...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!leaders.length)
    return <div className="no-data">No leaderboard data available</div>;

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>Intern Leaderboard</h1>
        <p className="subtitle">
          See how you stack up! Friendly competition helps us all make a bigger
          difference.
        </p>
      </div>

      <div className="leaderboard-table">
        <div className="table-header">
          <div className="rank-col">Rank</div>
          <div className="name-col">Name</div>
          <div className="referral-col">Referral Code</div>
          <div className="donations-col">Donations Raised</div>
        </div>

        {leaders.map((person, index) => (
          <div
            key={index}
            className={`table-row ${index < 3 ? "top-three" : ""} ${
              person.highlight ? "current-user" : ""
            }`}
          >
            <div className="rank-col">
              {index < 3 ? (
                <span className={`medal medal-${index + 1}`}>
                  {["🥇", "🥈", "🥉"][index]}
                </span>
              ) : (
                index + 1
              )}
            </div>
            <div className="name-col">
              {person.name}
              {person.highlight && <span className="you-tag"> (You)</span>}
            </div>
            <div className="referral-col">{person.referralCode}</div>
            <div className="donations-col">
              ₹{person.donations.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="leaderboard-footer">
        <p>
          Every contribution, big or small, helps empower a woman or girl
          through education and skill development.
        </p>
        <p>Keep up the fantastic work!</p>
      </div>
    </div>
  );
}

export default Leaderboard;
