import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { ImSpoonKnife } from "react-icons/im";
import { IconContext } from "react-icons";
import { Navbar, NavbarText, NavItem, Nav, NavLink } from "reactstrap";

import "./SideBar.css";

const SIDEBAR_DATA = [
  {
    id: 10,
    path: "/recipes/search",
    text: "Search Recipes",
    cName: "nav-text",
  },
  {
    id: 20,
    path: "/recipes/search/byingredient",
    text: "Search Recipes by Ingredients",
    cName: "nav-text",
  },
  {
    id: 30,
    path: "/recipes/wine",
    text: "Wine pairings",
    cName: "nav-text",
  },
  {
    id: 35,
    path: "/recipes/mealplan",
    text: "Create a meal plan",
    cName: "nav-text",
  },
  {
    id: 40,
    path: "/users/login",
    text: "Cookbook",
    cName: "nav-text",
  },
];

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <IconContext.Provider
        value={{ color: "#ffaf2a", size: "3.5rem", verticalAlign: "middle" }}
      >
        <div className="navbar sticky-top">
          <Link to="#" className="menu-bar">
            <VscThreeBars onClick={showSideBar} />
          </Link>
          <NavbarText>
            {/* <FaBars className="brand-icon p-1 mr-4" /> */}
            <ImSpoonKnife className="brand-icon p-1" />
            <span className="special-font special-font_brand">Recipes</span>
          </NavbarText>
        </div>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <VscClose />
              </Link>
            </li>
            {SIDEBAR_DATA.map((item) => (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
