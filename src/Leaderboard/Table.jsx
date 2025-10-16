import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  // Only show these columns
  const columns = ["User Name", "# of Skill Badges Completed", "Completion Status"];

  return (
    <div className="leaderboard-container">
      {data && data.length > 0 ? (
        <div className="table-scroll">
          <div className="table-wrapper">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  {columns.map((key) => (
                    <th key={key}>
                      {key === "# of Skill Badges Completed" ? "Badges Earned" : key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => {
                  let rowClass = "";
                  if (index === 0) rowClass = "first-place";
                  else if (index === 1) rowClass = "second-place";
                  else if (index === 2) rowClass = "third-place";

                  // Check badge completion
                  const badgesCompleted = parseInt(row["# of Skill Badges Completed"] || 0);
                  const isComplete = badgesCompleted >= 20;

                  return (
                    <tr key={index} className={rowClass}>
                      {columns.map((col, idx) => {
                        if (col === "Completion Status") {
                          return (
                            <td key={idx}>
                              {isComplete ? (
                                <span style={{ color: "green", fontSize: "20px" }}>✅</span>
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
