import axios from "axios";

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
    const { data } = await axios.get(MY_SERVER_URL);
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
  try {
    const { data } = await axios.post(MY_SERVER_URL, recipe);
    dispatch(addRecipe(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRecipe = (recipeApiId) => ({
  type: ActionTypes.MYRECIPES_DELETE,
  payload: recipeApiId,
});

export const deleteMyRecipe = (recipeApiId) => async (dispatch) => {
  try {
    await axios.delete(`${MY_SERVER_URL}/${recipeApiId}`);
    dispatch(deleteRecipe(recipeApiId));
  } catch (error) {
    console.log(error.message);
  }
};
