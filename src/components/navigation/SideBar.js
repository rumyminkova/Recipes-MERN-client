import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bar">
          <VscThreeBars />
        </Link>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items"></ul>
      </nav>
    </>
  );
};

export default SideBar;
