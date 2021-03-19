import axios from "axios";
import * as ActionTypes from "./actionTypes";

const recipeLoading = () => ({
  type: ActionTypes.RECIPE_LOADING,
});

const recipeFailed = (errMsg) => ({
  type: ActionTypes.RECIPE_FAILED,
  payload: errMsg,
});

export const recipeSuccess = (recipe) => ({
  type: ActionTypes.RECIPE_SUCCESS,
  payload: recipe,
});

export const fetchRecipe = (recipeId) => async (
  dispatch
) => {
  dispatch(recipeLoading());
  const options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
    headers: {
      'x-rapidapi-key': '981cb182b8msh990478e70276a77p1f2b25jsn37e72d02f516',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(recipeSuccess(data));
  } catch (error) {
    dispatch(recipeFailed(error.message));
  }
};
