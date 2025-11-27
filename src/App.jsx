import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Footer from "./components/footer"
import Header from "./Leaderboard/Header";
import Badges from "./Leaderboard/Badges";
import Table from "./Leaderboard/Table";
import Search from "./Leaderboard/Search";

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [maxBadge, setMaxBadge] = useState(0);

  useEffect(() => {
    fetch("/assets/leaderboard.csv")
      .then((res) => res.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            
            const processedData = results.data.map((row) => {
              const skillBadges = parseInt(
                row["# of Skill Badges Completed"] || 0
              );
              const arcadeGames = parseInt(
                row["# of Arcade Games Completed"] || 0
              );
              const totalScore = skillBadges + arcadeGames;

              return {
                ...row,
                totalScore, 
              };
            });

            const cleaned = processedData.filter(
              (row) => row["User Name"] && row.totalScore >= 0
            );

            cleaned.sort((a, b) => b.totalScore - a.totalScore);

            setData(cleaned);
            setFilteredData(cleaned);

            const studentsWith20Badges = cleaned.filter(
              (row) => row.totalScore === 20
            ).length;
            
            setMaxBadge(studentsWith20Badges);
          },
          error: (err) => console.error("CSV Parse Error:", err),
        });
      })
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((user) =>
          user["User Name"]?.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="falling-stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <Search onSearch={handleSearch} />
      <Badges maxBadge={maxBadge} />
      <Table data={filteredData} />
      <Footer/>
    </div>
  );
};

export default Leaderboard;

