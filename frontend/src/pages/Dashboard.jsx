import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch("https://shecan-intern-portal.onrender.com/api/intern")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch intern data");
        return res.json();
      })
      .then((data) => {
        setIntern({
          ...data,
          donationsRaised: data.totalDonations ?? 0,
          recentActivity: data.recentActivity || [],
        });

        setLoading(false);

        if (data.currentReferrals && data.nextTierReferrals) {
          setProgress(
            Math.min(
              100,
              Math.round((data.currentReferrals / data.nextTierReferrals) * 100)
            )
          );
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="dashboard-loading">Loading...</div>;
  if (error) return <div className="dashboard-error">Error: {error}</div>;

  const renderTabContent = () => {
    if (activeTab === "progress")
      return (
        <div className="progress-section">
          <h3>Your Progress</h3>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              <span className="progress-text">{progress}%</span>
            </div>
          </div>
          <p>
            {intern.nextTierReferrals - intern.currentReferrals} more referrals
            to reach <strong>{intern.nextTier}</strong> Tier
          </p>
          <div className="share-code">
            <h4>Share Your Referral Code</h4>
            <div className="code-box">
              <span>{intern.referralCode}</span>
              <button
                className="btn-primary copy-btn"
                onClick={() =>
                  navigator.clipboard.writeText(intern.referralCode)
                }
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      );

    if (activeTab === "rewards")
      return (
        <div className="rewards-section">
          <h3>Your Rewards</h3>
          <p>Coming soon...</p>
        </div>
      );

    return (
      <div className="impact-section">
        <h3>Your Impact</h3>
        <p>
          {intern.currentReferrals} referrals have helped educate{" "}
          <strong>{intern.childrenHelped}</strong> girls.
        </p>
        <div className="metrics">
          <div className="metric">
            <div className="metric-value">{intern.childrenHelped}</div>
            <div className="metric-label">Lives Impacted</div>
          </div>
          <div className="metric">
            <div className="metric-value">{intern.schoolsSupported}</div>
            <div className="metric-label">Schools Supported</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <h1>Welcome Back, Intern!</h1>
      <div className="welcome-box">
        <span>✅ Welcome, {intern.name}!</span>
        <p>
          Your referral code: <strong>{intern.referralCode}</strong>
        </p>
        <p>
          Total Donations:{" "}
          <strong>
            ₹
            {typeof intern.donationsRaised === "number"
              ? intern.donationsRaised.toLocaleString()
              : "0"}
          </strong>
        </p>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "progress" ? "active" : ""}
          onClick={() => setActiveTab("progress")}
        >
          My Progress
        </button>
        <button
          className={activeTab === "rewards" ? "active" : ""}
          onClick={() => setActiveTab("rewards")}
        >
          Rewards
        </button>
      </div>

      <div className="tab-content">{renderTabContent()}</div>

      <div className="activity">
        <h3>Recent Activity</h3>
        {intern.recentActivity.length > 0 ? (
          <ul>
            {intern.recentActivity.map((act, i) => (
              <li key={i}>
                <span className="checkmark">✓</span> {act}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent activity to display</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
