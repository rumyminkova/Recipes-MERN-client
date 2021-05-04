import * as api from "../../api/index.js";
import * as ActionTypes from "./authTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    localStorage.setItem("token", data.token);
    dispatch(authUser(data.result));
    history.push("/");
  } catch (err) {
    dispatch(userFailed(err.response.data.message));
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    localStorage.setItem("token", data.token);
    dispatch(authUser(data.result));
    history.push("/");
  } catch (err) {
    dispatch(userFailed(err.response.data.message));
  }
};

const authUser = (user) => ({
  type: ActionTypes.AUTH_USER,
  payload: user,
});

// Your backend should be set up to receive the token, decode it, and then return its associated user object. You then save this to the Redux store as usual.
export const fetchUserProfile = () => async (dispatch) => {
  try {
    const { data } = await api.getUserInfo();
    dispatch(authUser(data.result));
  } catch (err) {
    localStorage.removeItem("token");
    dispatch(userFailed(err.response.data.message));
  }
};

export const logoutUser = () => {
  return { type: ActionTypes.LOGOUT };
};

export const userFailed = (errorMsg) => {
  return { type: ActionTypes.USER_FAILED, error: errorMsg };
};
