import React from "react";
import "./Table.css";

import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { TbNumber65Small } from "react-icons/tb";

const Table = ({ data }) => {
  const columns = [
    "User Name",
    "Skill Badges",
    "Arcade Game",
    "Completion Status",
  ];

  return (
    <div className="leaderboard-container">
      {data && data.length > 0 ? (
        <div className="table-scroll">
          <div className="table-wrapper">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  {columns.map((colName) => (
                    <th key={colName}>{colName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => {
                  let rowClass = "";
                  rowClass = index <= 65 ? "first-place" : "";
                  
                  const totalScore = row.totalScore || 0;
                  const isComplete = totalScore >= 20;

                  const arcadeGamesCount = parseInt(
                    row["# of Arcade Games Completed"] || 0
                  );

                  return (
                    <tr key={index} className={rowClass}>
                      {columns.map((col, idx) => {
                        if (col === "Skill Badges") {
                          return (
                            <td key={idx}>
                              {row["# of Skill Badges Completed"]}
                            </td>
                          );
                        }

                        if (col === "Arcade Game") {
                          return (
                            <td key={idx}>
                              {arcadeGamesCount === 1 ? (
                                  <BsCheckCircleFill
                                    style={{
                                      color: "#00ff3cc9",
                                      fontSize: "20px",
                                      verticalAlign: "middle",
                                    }}
                                  />
                              ) : (
                                <BsXCircleFill
                                  style={{
                                    color: "#dc3545", 
                                    fontSize: "20px",
                                    verticalAlign: "middle",
                                  }}
                                />
                              )}
                            </td>
                          );
                        }

                        if (col === "Total Score") {
                          return <td key={idx}>{totalScore}</td>;
                        }

                        if (col === "Completion Status") {
                          return (
                            <td key={idx}>
                              {isComplete ? (
                                <span className="btn-donate">
                                  <BsCheckCircleFill
                                    style={{
                                      color: "#00ff3cc9",
                                      fontSize: "20px",
                                      verticalAlign: "middle",
                                    }}
                                  />
                                </span>
                              ) : (
                                ""
                              )}
                            </td>
                          );
                        }

                        return <td key={idx}>{row[col]}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="loading-text">Loading leaderboard...</p>
      )}
    </div>
  );
};

export default Table;


