import React from "react";

import "./CustomButton.css";

const CustomButton = ({ buttonLabel }) => {
  return (
    <button className="submit-button" type="submit">
      {buttonLabel}
    </button>
  );
};

export default CustomButton;
