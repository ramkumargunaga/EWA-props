import React, { useState } from "react";
import "./NavBar.css";
import { Img, Text } from "components";
import Button from "./../Button/Button";
import menuItems from "./../MenuItems/MenuItems";
const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="h-auto mb-[70px]">
      <div className="nav-bar">
        <nav className="navbar">
          <div className="navbar-logo">
            <img className="h-[90px]" src="images/img_ewablackmark.png" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>
            <a href="/register" className="register-btn">
              Register
            </a>
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
