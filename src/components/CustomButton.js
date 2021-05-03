import React from "react";
import { UncontrolledTooltip } from "reactstrap";

import "./CustomButton.css";

const CustomButton = ({ buttonLabel, type, onClick, tooltip, tooltipText }) => {
  return (
    <>
      <button
        className="custom-button"
        type={type}
        onClick={onClick}
        id={tooltip ? "withTooltip" : ""}
      >
        {buttonLabel}
      </button>
      {tooltip && (
        <UncontrolledTooltip
          placement="top"
          target="withTooltip"
          autohide
          fade
          popperClassName="custom-tooltip"
          innerClassName="custom-tooltip_inner"
        >
          {tooltipText}
        </UncontrolledTooltip>
      )}
    </>
  );
};

export default CustomButton;
