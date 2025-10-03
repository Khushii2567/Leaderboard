import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Welcome from "./Welcome/Welcome";
import FAQPage from "./FAQ/FAQPage";
import Leaderboard from "./Leaderboard/Leaderboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
