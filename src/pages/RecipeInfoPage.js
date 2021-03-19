import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import RecipeInfo from "../recipes/recipe/RecipeInfo";
import { fetchRecipe } from "../actions/recipeActions";

const RecipeInfoPage = () => {
  const recipeId = useParams().recipeId;
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, []);

  return recipe.loading ? (
    <div>Loading</div>
  ) : recipe.error ? (
    <div> recipe.error</div>
  ) : (
    <RecipeInfo recipe={recipe.item} />
  );

};

export default RecipeInfoPage;
