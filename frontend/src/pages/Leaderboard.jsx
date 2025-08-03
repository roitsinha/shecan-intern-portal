import React, { useEffect, useState } from "react";
import "../styles/Leaderboard.css";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://shecan-intern-portal.onrender.com/api/leaderboard")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch leaderboard data");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid leaderboard data");
        setLeaders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="leaderboard-loading">Loading...</div>;
  if (error) return <div className="leaderboard-error">Error: {error}</div>;
  if (!leaders.length)
    return <div className="leaderboard-no-data">No leaderboard data found</div>;

  return (
    <div className="leaderboard">
      <h1>Intern Leaderboard</h1>
      <p className="subtitle">Track your impact and rise through the ranks!</p>

      <div className="table">
        <div className="table-header row">
          <div className="col rank">Rank</div>
          <div className="col name">Name</div>
          <div className="col code">Referral Code</div>
          <div className="col donations">Donations</div>
        </div>

        {leaders.map((p, idx) => (
          <div
            className={`row ${idx < 3 ? `top top-${idx + 1}` : ""} ${
              p.highlight ? "you" : ""
            }`}
            key={idx}
          >
            <div className="col rank">
              {idx < 3 ? ["🥇", "🥈", "🥉"][idx] : idx + 1}
            </div>
            <div className="col name">
              {p.name}
              {p.highlight && <span className="you-tag">You</span>}
            </div>
            <div className="col code">{p.referralCode}</div>
            <div className="col donations">₹{p.donations.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
