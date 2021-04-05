import React from "react";

import "./CustomButton.css";

const CustomButton = (props) => {
  return (
    <button className="custom-button" type={props.type} onClick={props.onClick}>
      {props.buttonLabel}
    </button>
  );
};

export default CustomButton;
