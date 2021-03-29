import React from "react";
import { Link } from "react-router-dom";

import "./Forms.css";

const QuickMenuItem = ({ item }) => {
  return (
    <Link
      to={`/recipes/quicksearch/${item.searchTerm}`}
      style={{ textDecoration: "none" }}
    >
      <div className="d-flex flex-column justify=content-center align-items-center quickmenu-img_overlay">
        <img
          width="100%"
          src={item.image}
          alt={item.name}
          className="rounded-circle img-fluid img-thumbnail quickmenu_img "
        />
        <p className="quickmenu-item_title mt-2">{item.name}</p>
      </div>
    </Link>
  );
};

export default QuickMenuItem;
