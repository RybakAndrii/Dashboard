import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <div className="stat-box">
        <h3>Statistic 1</h3>
        <p>Value: 100</p>
      </div>
      <div className="stat-box">
        <h3>Statistic 2</h3>
        <p>Value: 200</p>
      </div>
      <div className="stat-box">
        <h3>Statistic 3</h3>
        <p>Value: 300</p>
      </div>
      <div className="stat-box">
        <h3>Statistic 4</h3>
        <p>Value: 400</p>
      </div>
    </div>
  );
}

export default MainContent;
