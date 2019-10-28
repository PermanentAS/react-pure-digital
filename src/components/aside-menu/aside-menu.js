import React, { Component } from "react";
import "./aside-menu.css";
import "./aside-menu-transitions.css";
import logo from "./../../img/logo.png";
import arrow from "./../../img/back-arrow.svg";
import AsideSubmenu from "./../aside-submenu";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class AsideMenu extends Component {
  state = {
    menu: [
      { id: 0, title: "Анкета" },
      { id: 1, title: "Перелiк документiв" },
      { id: 2, title: "Декларацiя" }
    ],
    filteredMenu: [
      { id: 0, title: "Анкета" },
      { id: 1, title: "Перелiк документiв" },
      { id: 2, title: "Декларацiя" }
    ],
    menuItemActive: false
  };

  onMenuItemClickHandler(id) {
    const filteredMenu = this.state.menu.filter(item => item.id === id);
    this.setState({ filteredMenu, menuItemActive: true });
  }

  onBackArrowClickHandler() {
    const filteredMenu = this.state.menu;
    this.setState({ filteredMenu, menuItemActive: false });
  }

  render() {
    const filteredMenu = this.state.filteredMenu.map(item => {
      return (
        <CSSTransition
          key={item.id}
          in={!this.state.menuItemActive}
          timeout={1000}
          classNames="item"
        >
          <li
            className={`menu-item ${this.state.menuItemActive && "active"}`}
            key={item.id}
          >
            <div>
              {this.state.menuItemActive && (
                <img
                  src={arrow}
                  className="back-arrow"
                  onClick={() => {
                    this.onBackArrowClickHandler();
                  }}
                />
              )}
              <span
                onClick={() => {
                  this.onMenuItemClickHandler(item.id);
                }}
              >
                {item.title}
              </span>
            </div>
            <div className="right-point"></div>
          </li>
        </CSSTransition>
      );
    });

    return (
      <div className="aside-menu">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="menu">
          <TransitionGroup className="menu">
            <ul>{filteredMenu}</ul>
          </TransitionGroup>
        </div>

        {this.state.menuItemActive && <AsideSubmenu />}
      </div>
    );
  }
}

export default AsideMenu;
