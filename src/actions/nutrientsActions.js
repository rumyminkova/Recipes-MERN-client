import axios from "axios";

import * as ActionTypes from "./actionTypes";
import { API_HOST, API_KEY } from "../config";

const nutrientsLoading = () => ({
  type: ActionTypes.NUTRIENTS_LOADING,
});

const nutrientsFailed = (errMsg) => ({
  type: ActionTypes.NUTRIENTS_FAILED,
  payload: errMsg,
});

export const nutrientsSuccess = (recipes) => ({
  type: ActionTypes.NUTRIENTS_SUCCESS,
  payload: recipes,
});

export const fetchRecipesByNutrients = ({
  calories,
  carbs,
  fat,
  protein,
}) => async (dispatch) => {
  dispatch(nutrientsLoading());
  const options = {
    method: "GET",
    url:
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients",
    params: {
      minCarbs: carbs.min,
      minProtein: protein.min,
      offset: "0",
      number: "6",
      maxCalories: calories.max,
      maxCarbs: carbs.max,
      maxFat: fat.max,
      maxProtein: protein.max,
      minFat: fat.min,
      minCalories: calories.min,
      random: "true",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(nutrientsSuccess(data));
  } catch (error) {
    dispatch(nutrientsFailed(error.message));
  }
};
