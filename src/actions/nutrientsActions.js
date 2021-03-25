import axios from "axios";

import * as ActionTypes from "./actionTypes";
import { API_HEADERS } from "../config";

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
  minCalories,
  maxCalories,
  minCarbs,
  maxCarbs,
  minProtein,
  maxProtein,
  minFat,
  maxFat,
}) => async (dispatch) => {
  dispatch(nutrientsLoading());
  const options = {
    method: "GET",
    url:
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients",
    params: {
      minCarbs: minCarbs,
      minProtein: minProtein,
      offset: "0",
      number: "10",
      maxCalories: maxCalories,
      maxCarbs: maxCarbs,
      maxFat: maxFat,
      maxProtein: maxProtein,
      minFat: minFat,
      minCalories: minCalories,
    },
    headers: API_HEADERS,
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(nutrientsSuccess(data));
  } catch (error) {
    dispatch(nutrientsFailed(error.message));
  }
};
