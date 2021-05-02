import axios from "axios";

import * as ActionTypes from "../actionTypes";
import { API_HOST, API_KEY } from "../../config";

const recipeLoading = () => ({
  type: ActionTypes.RECIPE_LOADING,
});

const recipeFailed = (errMsg) => ({
  type: ActionTypes.RECIPE_FAILED,
  error: errMsg,
});

export const recipeSuccess = (recipe) => ({
  type: ActionTypes.RECIPE_SUCCESS,
  payload: recipe,
});

export const fetchRecipe = (recipeId) => async (dispatch) => {
  dispatch(recipeLoading());
  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(recipeSuccess(data));
  } catch (error) {
    dispatch(recipeFailed(error.message));
  }
};
