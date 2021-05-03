import * as ActionTypes from "../../actions/auth/authTypes";

const authReducer = (state = { currentUser: null, error: null }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, currentUser: action?.payload, error: null };

    case ActionTypes.LOGOUT:
      return { ...state, currentUser: null, error: null };

    case ActionTypes.USER_FAILED:
      return { ...state, currentUser: null, error: action.error };

    default:
      return state;
  }
};

export default authReducer;
