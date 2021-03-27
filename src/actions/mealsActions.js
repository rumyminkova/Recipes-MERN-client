import axios from "axios";

import * as ActionTypes from "./actionTypes";
import { API_HOST, API_KEY } from "../config";

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
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(mealsSuccess(data));
  } catch (error) {
    dispatch(mealsFailed(error.message));
  }
};
