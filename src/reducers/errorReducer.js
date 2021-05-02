import { HIDE_ERROR } from "../actions/errors/errorTypes";

const initState = {
  error: null,
  isOpen: false,
};

const errorReducer = (state = initState, action) => {
  console.log("in error reducer");
  console.log("Action", action);
  console.log("Error", action.error);
  const { error } = action;
  if (error) {
    return {
      error: error,
      isOpen: true,
    };
  } else if (action.type === HIDE_ERROR) {
    return {
      error: null,
      isOpen: false,
    };
  }
  return state;
};

export default errorReducer;
