import * as ActionTypes from "../../actions/actionTypes";

const authReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    // case ActionTypes.AUTH:
    //   localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
    //   return { ...state, currentUser: action?.payload };

    case ActionTypes.AUTH_USER:
      return { ...state, currentUser: action?.payload };

    case ActionTypes.LOGOUT:
      console.log("Inlogout");
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default authReducer;
