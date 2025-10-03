import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/leaderboard">Leaderboard</Link></li> */}
          <li><Link to="/skill-badges">Skill Badges</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
