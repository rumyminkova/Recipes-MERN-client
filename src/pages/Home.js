import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import RecipesList from "../recipes/RecipesList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    //   dispatch(fetchRecipes);
  }, []);

  return (
    <div>
      <SearchForm />
      {recipes.isLoading ? (
        <h1> Loading </h1>
      ) : recipes.error ? (
        <h1> {recipes.error} </h1>
      ) : (
        <RecipesList recipes={recipes.items} />
      )}
    </div>
  );
};

export default Home;
