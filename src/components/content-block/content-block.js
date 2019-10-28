import React from "react";
import "./content-block.css";
import ProgressBar from "./../progress-bar"
import RoundBar from "./../round-bar"

const ContentBlock = () => {
  return (
    <div className="content-block">
      <div >
          <ul className="top-navigation">
              <li className="top-navigation-item"><a href="#" className="active">Документи</a></li>
              <li className="top-navigation-item"><a href="#">База знань</a></li>
              <li className="top-navigation-item"><a href="#">Особистий кабінет</a></li>
          </ul>
      </div>
      <ProgressBar />
      <RoundBar />
      <button className="btn-next">Далі</button>
    </div>
  );
};

export default ContentBlock;