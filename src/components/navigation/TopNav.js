import React from "react";
import { Navbar, NavbarText, NavItem, Nav, NavLink } from "reactstrap";

import { Link } from "react-router-dom";
import { GiBlackBook } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { FaBars } from "react-icons/fa";

import "./TopNav.css";

const TopNav = () => {
  return (
    <Navbar className="navbar-bar fixed">
      <NavbarText>
        <FaBars className="brand-icon p-1 mr-4" />
        <ImSpoonKnife className="brand-icon p-1" />
        <span className="special-font special-font_brand">Recipes</span>
      </NavbarText>
    </Navbar>
  );
};

export default TopNav;
