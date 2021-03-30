import React from "react";

import "./Forms.css";

const QuickMenuItem = ({ item, handleClick }) => {
  return (
    <div
      className="d-flex flex-column justify=content-center align-items-center quickmenu-img_overlay"
      onClick={handleClick}
    >
      <img
        width="100%"
        src={item.image}
        alt={item.name}
        className="rounded-circle img-fluid img-thumbnail quickmenu_img "
      />
      <p className="quickmenu-item_title mt-2">{item.name}</p>
    </div>
  );
};

export default QuickMenuItem;
