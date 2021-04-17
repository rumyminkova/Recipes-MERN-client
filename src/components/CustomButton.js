import React from "react";

import "./CustomButton.css";

const CustomButton = ({buttonLabel, type, onClick}) => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {buttonLabel}
    </button>
  );
};

export default CustomButton;
