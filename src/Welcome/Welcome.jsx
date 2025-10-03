import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Dots from "./Dots";

const Welcome = () => {
  return (
    <div
      className="h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/webPage.svg')" }}
    >
      <Header />

      {/* Falling stars animation */}
      <div className="falling-stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      {/* Middle Section with dots */}
      <div className="flex justify-between items-center w-full mt-6">
        <Dots side="left" />
        <Middle />
        <Dots side="right" />
      </div>
      <Buttons />
      <Footer />
    </div>
  );
};

export default Welcome;
