import React from "react";
import "./Badges.css";

const Badges = ({ maxBadge }) => {
  return (
    <div className="badges-container">
      <div className={`badge ${maxBadge >= 5 ? "active" : ""}`}>5 Badges</div>
      <div className={`badge ${maxBadge >= 10 ? "active" : ""}`}>10 Badges</div>
      <div className={`badge ${maxBadge >= 20 ? "active" : ""}`}>20 Badges</div>
    </div>
  );
};

export default Badges;
