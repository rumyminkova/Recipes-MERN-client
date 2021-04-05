import { AUTH } from "../actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //user login
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //user signup
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
