import axios from "axios";

import * as ActionTypes from "./actionTypes";
import { API_HEADERS } from "../config";

const mealsLoading = () => ({
  type: ActionTypes.MEALS_LOADING,
});

const mealsFailed = (errMsg) => ({
  type: ActionTypes.MEALS_FAILED,
  payload: errMsg,
});

export const mealsSuccess = (meals) => ({
  type: ActionTypes.MEALS_SUCCESS,
  payload: meals,
});

export const fetchMeals = ({ calories, diet, exclude }) => async (dispatch) => {
  dispatch(mealsLoading());
  const options = {
    method: "GET",
    url:
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
    params: {
      timeFrame: "day",
      targetCalories: calories,
      diet: diet,
      exclude: exclude,
    },
    headers: API_HEADERS,
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(mealsSuccess(data));
  } catch (error) {
    dispatch(mealsFailed(error.message));
  }
};