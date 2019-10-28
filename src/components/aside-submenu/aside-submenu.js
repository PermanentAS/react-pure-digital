import React from "react";
import "./aside-submenu.css";

const AsideSubmenu = () => {
  return (
    <div className="aside-submenu">
      <div className="submenu-block">
        <ul>
          <li className="sub-menu-item">
            <span className="success">
              Виплати, пов'язані з трудовими відносинами
            </span>
            <div></div>
          </li>
          <li className="sub-menu-item">
            <span className="success">Стипендії</span> <div></div>
          </li>
          <li className="sub-menu-item">
            <span className="failure">Доходи від продажу/обміну майна</span>{" "}
            <div></div>
          </li>
          <li className="sub-menu-item">
            <span className="checkbox">
              <input
                type="radio"
                id="first"
                className="checker"
                name="horns"
                defaultChecked
              />
              <label htmlFor="first">
                <span>Підприємницькі доходи (припинення діяльності)</span>
              </label>
              <div></div>
            </span>
          </li>
          <li className="sub-menu-item">
            <span className="checkbox">
              <input
                type="radio"
                id="second"
                className="checker"
                name="horns"
              />
              <label htmlFor="second">
                <span>Дохід від незалежної професійної діяльності</span>
              </label>
              <div></div>
            </span>
          </li>
        </ul>
        <button className="btn-aside">Сформувати декларацію</button>
      </div>
    </div>
  );
};

export default AsideSubmenu;
