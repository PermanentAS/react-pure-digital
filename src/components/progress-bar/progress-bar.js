import React from "react";
import "./progress-bar.css";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="container">
        <div className="progress">
          <div className="percent"></div>
        </div>
        <div className="steps">
          <div className="step completed selected" id="0"></div>
          <div className="step selected" id="1"></div>
          <div className="step" id="2"></div>
          <div className="step" id="3"></div>
          <div className="step" id="4"></div>
          <div className="step" id="5"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
