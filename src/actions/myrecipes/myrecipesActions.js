import * as api from "../../api/index.js";
import * as ActionTypes from "../actionTypes";
import { setError } from "../errors/errorActions";

const myRecipesLoading = () => ({
  type: ActionTypes.MYRECIPES_LOADING,
});

const myRecipesFailed = (errMsg) => ({
  type: ActionTypes.MYRECIPES_FAILED,
  error: errMsg,
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
  } catch (err) {
    dispatch(myRecipesFailed(err.response.data.message));
  }
};

export const addRecipe = (recipe) => ({
  type: ActionTypes.MYRECIPES_ADD,
  payload: recipe,
});

export const postRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.saveRecipe(recipe);
    dispatch(addRecipe(data));
    dispatch(setError("Recipe Added"));
  } catch (err) {
    dispatch(myRecipesFailed(err.response.data.message));
  }
};

export const deleteRecipe = (recipeId) => ({
  type: ActionTypes.MYRECIPES_DELETE,
  payload: recipeId,
});

export const deleteMyRecipe = (recipeId) => async (dispatch) => {
  try {
    await api.deleteRecipe(recipeId);
    dispatch(deleteRecipe(recipeId));
    dispatch(setError("Recipe Removed"));
  } catch (err) {
    dispatch(myRecipesFailed(err.response.data.message));
  }
};
