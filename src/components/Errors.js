import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import { FiAlertCircle } from "react-icons/fi";
import { useHistory } from "react-router";

const Errors = ({ error, text, redirect }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
    history.push(redirect);
  };
  return (
    <div className="alert-container d-flex justify-content-center align-items-start p-5">
      <Alert color="danger" isOpen={visible} toggle={onDismiss}>
        <div className="text-center p-1">
          <FiAlertCircle size="3rem" style={{ color: "#ffaf2a" }} />
        </div>
        <h2 className="p-1 m-1 text-center">{text}</h2>
      </Alert>
    </div>
  );
};
export default Errors;
