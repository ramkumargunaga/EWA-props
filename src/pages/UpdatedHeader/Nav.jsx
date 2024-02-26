import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Nav.css";
import { Img, Text } from "components";
import CheckIn from "./CheckIn";
const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="bg-img">
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

      <div className="hero-text">
        <Text
          className="md:text-5xl text-[70px] text-shadow-ts text-white-A700"
          size="txtInterBold80"
        >
          <>
            Quality
            <br />
            Holidays With Us!
          </>
        </Text>
        <Text
          className="md:ml-[0] text-[10px] text-center text-white-A700"
          size="txtOpenSansRegular10"
        >
          Our Villas offers a warm and inviting retreat, providing the perfect
          blend of comfort and hospitality for a memorable stay.
        </Text>
      </div>

      <CheckIn />
    </div>
  );
};

export default Nav;
