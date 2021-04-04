import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { ImSpoonKnife } from "react-icons/im";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";

import CustomButton from "../CustomButton";

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
  {
    id: 50,
    // path: "/users/:userId/myrecipes",
    path: "/myrecipes",
    text: "My Recipes",
    cName: "nav-text",
  },

  {
    id: 45,
    path: "/auth",
    text: "Login In",
    cName: "nav-text",
  },
];

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const showSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
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
          <div
            className="container d-flex justify-content-center
          align-items-center"
          >
            {user ? (
              <div>
                <span> {user.result.name}</span>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <Link to="/auth" className="btn btn-info">
                Login
              </Link>
            )}
          </div>
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
