import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import recipeReducer from "./recipeReducer";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
});
