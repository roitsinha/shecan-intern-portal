import React, { useEffect, useState } from "react";
import { getInternData } from "../api/dummyData";

function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInternData()
      .then((data) => {
        setIntern(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load intern data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!intern) return <p>Error loading dashboard.</p>;

  return (
    <div className="dashboard-container" style={styles.container}>
      <h1>Welcome, {intern.name}</h1>
      <p>
        Referral Code: <strong>{intern.referralCode}</strong>
      </p>
      <p>
        Total Donations Raised: <strong>₹{intern.totalDonations}</strong>
      </p>

      <section style={styles.rewardsSection}>
        <h2>🎁 Rewards</h2>
        <ul>
          <li>₹5,000 — SheCan T-shirt</li>
          <li>₹8,000 — Amazon Gift Card</li>
          <li>₹10,000 — Internship Certificate</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  rewardsSection: {
    marginTop: "30px",
  },
};

export default Dashboard;
