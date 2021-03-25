import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import recipeReducer from "./recipeReducer";
import mealsReducer from "./mealsReducer";
import nutrientsReducer from "./nutrientsReducer";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  meals: mealsReducer,
  nutrients: nutrientsReducer,
});
