import * as api from "../../api/index.js";
import * as ActionTypes from "../actionTypes";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    localStorage.setItem("token", data.token);
    dispatch(authUser(data.result));
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    localStorage.setItem("token", data.token);
    dispatch(authUser(data.result));
  } catch (err) {
    console.log(err);
  }
};

const authUser = (user) => ({
  type: ActionTypes.AUTH_USER,
  payload: user,
});

// Your backend should be set up to receive the token, decode it, and then return its associated user object. You then save this to the Redux store as usual.
export const fetchUserProfile = () => async (dispatch) => {
  const { data } = await api.getUserInfo();
  // if (data.message) {
  //   // An error will occur if the token is invalid.
  //   // If this happens, you may want to remove the invalid token.
  //   localStorage.removeItem("token");
  // } else {
  //   console.log(data);
  // }

  dispatch(authUser(data.result));
};

export const logoutUser = () => {
  return { type: ActionTypes.LOGOUT };
};
