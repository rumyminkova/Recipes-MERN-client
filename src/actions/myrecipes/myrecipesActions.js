import axios from "axios";
import * as api from "../../api/index.js";

import * as ActionTypes from "../actionTypes";
import { MY_SERVER_URL } from "../../config";

const myRecipesLoading = () => ({
  type: ActionTypes.MYRECIPES_LOADING,
});

const myRecipesFailed = (errMsg) => ({
  type: ActionTypes.MYRECIPES_FAILED,
  payload: errMsg,
});

export const myRecipesSuccess = (recipes) => ({
  type: ActionTypes.MYRECIPES_SUCCESS,
  payload: recipes,
});

export const fetchMyRecipes = () => async (dispatch) => {
  dispatch(myRecipesLoading());
  try {
    const { data } = await api.fetchMyRecipes();
    dispatch(myRecipesSuccess(data));
  } catch (error) {
    dispatch(myRecipesFailed(error.message));
  }
};

export const addRecipe = (recipe) => ({
  type: ActionTypes.MYRECIPES_ADD,
  payload: recipe,
});

export const postRecipe = (recipe) => async (dispatch) => {
  console.log(recipe);
  try {
    const { data } = await api.saveRecipe(recipe);
    dispatch(addRecipe(data));
  } catch (err) {
    dispatch(myRecipesFailed(err.response.data.message));
  }
};

export const deleteRecipe = (recipeApiId) => ({
  type: ActionTypes.MYRECIPES_DELETE,
  payload: recipeApiId,
});

export const deleteMyRecipe = (recipeId) => async (dispatch) => {
  try {
    await api.deleteRecipe(recipeId);
    dispatch(deleteRecipe(recipeId));
  } catch (error) {
    console.log(error.message);
  }
};
