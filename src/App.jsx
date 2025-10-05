import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Header from "./Leaderboard/Header";
import Badges from "./Leaderboard/Badges";
import Table from "./Leaderboard/Table";
import Search from "./Leaderboard/Search";

const Leaderboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [maxBadge, setMaxBadge] = useState(0);

  // ✅ Device check logic inside the component
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile =
        /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
      setIsMobile(mobile || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // 🚫 Show message if mobile
  if (isMobile) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#111",
          color: "white",
          fontSize: "1.5rem",
          padding: "2rem",
        }}
      >
        🚫 This website is available only on desktop devices.
      </div>
    );
  }

  // ✅ CSV Loading
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
