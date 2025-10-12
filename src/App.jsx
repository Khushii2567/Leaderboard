import React, { useEffect, useState } from "react";
import Papa from "papaparse";
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
            const cleaned = results.data.filter(
              (row) => row["User Name"] && row["# of Skill Badges Completed"]
            );

            cleaned.sort(
              (a, b) =>
                parseInt(b["# of Skill Badges Completed"] || 0) -
                parseInt(a["# of Skill Badges Completed"] || 0)
            );

            setData(cleaned);
            setFilteredData(cleaned);

            const max = Math.max(
              ...cleaned.map((d) =>
                parseInt(d["# of Skill Badges Completed"] || 0)
              )
            );
            setMaxBadge(max);
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
    </div>
  );
};

export default Leaderboard;
