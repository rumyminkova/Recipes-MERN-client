import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import RecipeInfo from "../recipes/recipe/RecipeInfo";
import { fetchRecipe } from "../actions/recipeActions";
import Loading from "../components/Loading";

const RecipeInfoPage = () => {
  const recipeId = useParams().recipeId;
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, []);

  return recipe.loading ? (
    <Loading />
  ) : recipe.error ? (
    <div> recipe.error</div>
  ) : (
    <RecipeInfo recipe={recipe.item} />
  );
};

export default RecipeInfoPage;
