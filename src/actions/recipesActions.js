import axios from "axios";
import * as ActionTypes from "./actionTypes";
import { API_HEADERS } from "../config";

const recipesLoading = () => ({
  type: ActionTypes.RECIPES_LOADING,
});

const recipesFailed = (errMsg) => ({
  type: ActionTypes.RECIPES_FAILED,
  payload: errMsg,
});

export const recipesSuccess = (recipes) => ({
  type: ActionTypes.RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipes = ({ searchTerm, dishType, diet, cuisine }) => async (
  dispatch
) => {
  dispatch(recipesLoading());
  const options = {
    method: "GET",
    url:
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    params: {
      query: searchTerm,
      cuisine: cuisine,
      diet: diet,
      excludeIngredients: "",
      intolerances: "",
      number: "10",
      offset: "0",
      type: dishType,
    },
    headers: API_HEADERS,
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    dispatch(recipesSuccess(data.results));
  } catch (error) {
    dispatch(recipesFailed(error.message));
  }
};
