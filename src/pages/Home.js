import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RecipesList from "../recipes/RecipesList";
import { fetchRecipes } from "../actions/recipesActions";

const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch(fetchRecipes);
  }, []);

  const getRecipes = () => {
    dispatch(fetchRecipes());
    console.log(recipes);
  };

  if (recipes.isLoading) return <h1> Loading </h1>;
  if (recipes.error) return <h1> {recipes.error} </h1>;

  return (
    <div>
      <button onClick={getRecipes}> Fetch Recipes </button>

      <RecipesList recipes={recipes.items} />
    </div>
  );
};

export default Home;
