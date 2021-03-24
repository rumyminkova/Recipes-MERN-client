import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      height="50vh"
      width="100%"
    >
      <Spinner
        style={{ width: "5rem", height: "5rem", color: "rgb(255, 175, 42)" }}
      />
    </div>
  );
};

export default Loading;
