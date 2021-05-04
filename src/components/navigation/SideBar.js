import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { ImSpoonKnife } from "react-icons/im";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";

import { logoutUser, fetchUserProfile } from "../../actions/auth/auth";
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
    path: "/cookbook",
    text: "Cookbook",
    cName: "nav-text",
  },
];

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const showSideBar = () => setSideBar(!sideBar);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    history.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      } else dispatch(fetchUserProfile());
    }
  }, []);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <>
      <IconContext.Provider
        value={{ color: "#ffaf2a", size: "3rem", verticalAlign: "middle" }}
      >
        <div className="navbar sticky-top">
          <div className="mr-1">
            <Link to="#" className="menu-bar">
              <VscThreeBars onClick={showSideBar} />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <ImSpoonKnife />
            <span className="special-font special-font_brand-top">Recipes</span>
          </div>
          <div
            className="d-flex justify-content-center
          align-items-center"
          >
            {user ? (
              <div
                className="d-flex flex-column justify-content-center
             align-items-center"
              >
                <span
                  className="user-name d-inline-block text-truncate"
                  style={{ maxWidth: "95%" }}
                >
                  {user.name}
                </span>
                <CustomButton
                  onClick={logout}
                  type="button"
                  buttonLabel="Logout"
                />
              </div>
            ) : (
              <Link to="/auth" className="btn custom-button">
                Sign in
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
