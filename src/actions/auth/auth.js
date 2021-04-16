import { AUTH } from "../actionTypes";
import * as api from "../../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, payload: data });
    history.push(history);
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, payload: data });
    history.push(history);
  } catch (err) {
    console.log(err);
  }
};
