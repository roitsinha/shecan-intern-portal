import React, { useEffect, useState } from "react";
import { getInternData } from "../api/dummyData";
import "../styles/Dashboard.css";

function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // Now properly used
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getInternData()
      .then((data) => {
        if (!data) {
          throw new Error("No data received");
        }
        setIntern({
          ...data,
          recentActivity: data.recentActivity || [],
        });
        setLoading(false);
        const calculatedProgress =
          data.currentReferrals && data.nextTierReferrals
            ? Math.min(
                100,
                Math.round(
                  (data.currentReferrals / data.nextTierReferrals) * 100
                )
              )
            : 0;
        setProgress(calculatedProgress);
      })
      .catch((err) => {
        console.error("Failed to load intern data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="dashboard-loading">Loading dashboard...</div>;
  if (error) return <div className="dashboard-error">Error: {error}</div>;
  if (!intern) return <div className="dashboard-error">No data available</div>;

  // Tab content rendering function
  const renderTabContent = () => {
    switch (activeTab) {
      case "progress":
        return (
          <div className="progress-section animate-fade-in">
            <h3>Your Progress</h3>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}>
                <span className="progress-text">{progress}%</span>
              </div>
            </div>
            <p className="progress-description">
              {intern.nextTierReferrals - intern.currentReferrals} more
              referrals needed to reach {intern.nextTier} Tier
            </p>
            <div className="referral-share">
              <h4>Share Your Referral Code</h4>
              <div className="referral-code-box">
                {intern.referralCode}
                <button className="copy-btn">Copy</button>
              </div>
            </div>
          </div>
        );
      case "rewards":
        return (
          <div className="rewards-section animate-fade-in">
            <h3>Your Rewards</h3>
            <div className="tiers-section">{/* Rewards content here */}</div>
          </div>
        );
      default: // 'overview'
        return (
          <div className="impact-section animate-fade-in">
            <h3>Your Impact</h3>
            <p>
              Your {intern.currentReferrals} referrals have helped educate{" "}
              {intern.childrenHelped} girls.
            </p>
            <div className="impact-metrics">
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
    }
  };

  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        {/* ... existing welcome section content ... */}
      </div>

      {/* Tab Navigation - Now properly using setActiveTab */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${activeTab === "progress" ? "active" : ""}`}
          onClick={() => setActiveTab("progress")}
        >
          My Progress
        </button>
        <button
          className={`tab-btn ${activeTab === "rewards" ? "active" : ""}`}
          onClick={() => setActiveTab("rewards")}
        >
          Rewards
        </button>
      </div>

      {/* Tab Content - Now properly rendered based on activeTab */}
      <div className="tab-content">{renderTabContent()}</div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h3>Recent Activity</h3>
        {intern.recentActivity.length > 0 ? (
          <ul className="activity-list">
            {intern.recentActivity.map((activity, index) => (
              <li key={index} className="activity-item">
                <span className="activity-icon">✓</span>
                <span className="activity-text">{activity}</span>
                <span className="activity-time">2h ago</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-activity">No recent activity to display</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
