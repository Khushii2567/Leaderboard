import React from "react";
import "./Badges.css";

const Badges = ({ maxBadge }) => {
  return (
    <div className="badges-container">
      <div className={`badge ${maxBadge >= 50 ? "active" : ""}`}>3 Tier</div>
      <div className={`badge ${maxBadge >= 66 ? "active" : ""}`}>2 Tier</div>
      <div className={`badge ${maxBadge >= 100 ? "active" : ""}`}>1 Tier</div>
    </div>
  );
};

export default Badges;
