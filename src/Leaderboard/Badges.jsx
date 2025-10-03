import React from "react";
import "./Badges.css";

const Badges = ({ maxBadge }) => {
  return (
    <div className="badges-container">
      <div className={`badge ${maxBadge >= 50 ? "active" : ""}`}>50 Badges</div>
      <div className={`badge ${maxBadge >= 70 ? "active" : ""}`}>70 Badges</div>
      <div className={`badge ${maxBadge >= 100 ? "active" : ""}`}>100 Badges</div>
    </div>
  );
};

export default Badges;
