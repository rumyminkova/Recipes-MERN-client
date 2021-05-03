import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { HIDE_ERROR } from "../actions/errors/errorTypes";
import CustomButton from "../components/CustomButton";

const ErrorNotification = () => {
  const isOpen = useSelector((state) => state.error.isOpen);
  const error = useSelector((state) => state.error.error);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: HIDE_ERROR });
  };

  return (
    <>
      {isOpen && error && (
        <div className="my-3 py-1 mx-auto notification">
          <h3 className="p-1 m-1 text-center text-dark my-2">{error}</h3>
          <div className="d-flex justify-content-center mt-3">
            <CustomButton
              onClick={handleClose}
              buttonLabel="Close"
              type="button"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorNotification;
