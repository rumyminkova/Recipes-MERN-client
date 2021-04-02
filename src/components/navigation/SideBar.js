import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { ImSpoonKnife } from "react-icons/im";
import { IconContext } from "react-icons";

import CustomButton from "../CustomButton";

import { fetchMyRecipes } from "../../actions/myrecipes/myrecipesActions";

import "./SideBar.css";

const SIDEBAR_DATA = [
  {
    id: 5,
    path: "/",
    text: "Home",
    cName: "nav-text",
  },
  {
    id: 10,
    path: "/recipes/search",
    text: "Search Recipes",
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
    path: "/recipes/nutrients",
    text: "Recipes by Nutrients",
    cName: "nav-text",
  },

  // {
  //   id: 45,
  //   path: "/users/login",
  //   text: "Login",
  //   cName: "nav-text",
  // },
];

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  const dispatch = useDispatch();

  const getRecipes = () => {
    const recipes = dispatch(fetchMyRecipes());
    console.log(recipes);
  };

  return (
    <>
      <IconContext.Provider
        value={{ color: "#ffaf2a", size: "3.5rem", verticalAlign: "middle" }}
      >
        <div className="navbar sticky-top">
          <Link to="#" className="menu-bar">
            <VscThreeBars onClick={showSideBar} />
          </Link>
          <div className="d-flex align-items-center">
            <ImSpoonKnife />
            <span className="special-font special-font_brand-top">Recipes</span>
          </div>

          {/* <CustomButton buttonLabel="Login"/> */}

          <button onClick={getRecipes}> Fetch </button>
        </div>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <VscClose />
              </Link>
              {/* <CgMenuBoxed className="ml-4" />
              <span className="special-font special-font_brand">Menu</span> */}
            </li>
            {SIDEBAR_DATA.map((item) => (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>
                  <span className="sidebar_span">{item.text}</span>
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
