import React, { Component } from "react";
import "./round-bar.css";
import babyBoy from "./../../img/round-bar/baby-boy.png";
import babyBoyActive from "./../../img/round-bar/baby-boy-active.png";
import co2 from "./../../img/round-bar/co2.png";
import co2Active from "./../../img/round-bar/co2-active.png";
import hat from "./../../img/round-bar/hat.png";
import hatActive from "./../../img/round-bar/hat-active.png";
import heart from "./../../img/round-bar/heart.png";
import heartActive from "./../../img/round-bar/heart-active.png";
import home from "./../../img/round-bar/home.png";
import homeActive from "./../../img/round-bar/home-active.png";
import key from "./../../img/round-bar/key.png";
import keyActive from "./../../img/round-bar/key-active.png";
import percent from "./../../img/round-bar/percent.png";
import percentActive from "./../../img/round-bar/percent-active.png";
import shield from "./../../img/round-bar/secure-shield.png";
import shieldActive from "./../../img/round-bar/secure-shield-active.png";

class RoundBar extends Component {
  state = {
    active: 1,
    data: [
      { id: 0, img: babyBoy, imgActive: babyBoyActive, title: "Baby" },
      { id: 1, img: co2, imgActive: co2Active, title: "CO2" },
      { id: 2, img: hat, imgActive: hatActive, title: "Hat" },
      { id: 3, img: heart, imgActive: heartActive, title: "Heart" },
      { id: 4, img: home, imgActive: homeActive, title: "Home" },
      { id: 5, img: key, imgActive: keyActive, title: "Key" },
      { id: 6, img: percent, imgActive: percentActive, title: "Percent" },
      { id: 7, img: shield, imgActive: shieldActive, title: "Shield" }
    ]
  };

  onSecktionClick(id) {
    this.setState({ active: id });
  }

  render() {
    const { data, active } = this.state;
    const renderedMenu = data.map(item => {
      return (
        <li
          className={active === item.id ? "active" : {}}
          onClick={() => {
            this.onSecktionClick(item.id);
          }}
          key={item.id}
        >
          <span>
            <img src={active === item.id ? item.imgActive : item.img} />
          </span>
        </li>
      );
    });
    return (
      <div className="round-bar">
        <nav className="circle-menu">
          <div className="center">
            <h2>{data[active].title}</h2>
            <p>
              витрати понесені за власне навчання та/або навчання члена сім’ї
              першого ступеня споріднення (в тому числі працездатних дітей віком
              до 23 років та/або непрацездатних дітей незалежно від віку), які
              не отримують заробітну плату, окрім коштів за навчання на
              військовій кафедрі
            </p>
          </div>
          <ul >{renderedMenu}</ul>
        </nav>
      </div>
    );
  }
}

export default RoundBar;
