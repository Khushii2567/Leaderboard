import React from "react";
import Header from "./header";
import Que from "./que";
import Sidebar from "./Sidebar";

const FAQPage = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* Falling stars animation */}
      <div className="falling-stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <Que />
    </div>
  );
};

export default FAQPage;
