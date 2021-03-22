import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import recipeReducer from "./recipeReducer";
import mealsReducer from "./mealsReducer";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  meals: mealsReducer,
});
