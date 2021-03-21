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
    <div className="home-container">
      <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <SearchForm />
      </div>
      {recipes.isLoading ? (
        <h1> Loading </h1>
      ) : recipes.error ? (
        <h1> {recipes.error} </h1>
      ) : recipes.items.length === 0 ? (
        <h5>Sorry... No recipes found with that criteria</h5>
      ) : (
        <RecipesList recipes={recipes.items} />
      )}
    </div>
  );
};

export default Home;
