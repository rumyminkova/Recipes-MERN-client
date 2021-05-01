import React, { useState } from "react";
import { Alert } from "reactstrap";
import { useHistory } from "react-router";

import CustomButton from "./CustomButton";

const CustomAlert = ({ text, redirect }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
    history.push(redirect);
  };
  return (
    <Alert color="secondary" isOpen={visible} className="my-3">
      <h3 className="p-1 m-1 text-center text-dark my-2">{text}</h3>
      <div className="d-flex justify-content-center mt-3">
        <CustomButton onClick={onDismiss} buttonLabel="Close" type="button" />
      </div>
    </Alert>
  );
};
export default CustomAlert;
