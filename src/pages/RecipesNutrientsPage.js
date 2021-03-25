import React from "react";
import { useSelector } from "react-redux";

import RecipesList from "../recipes/RecipesList";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";

const RecipesNutrients = () => {
  //   const recipes = useSelector((state) => state.recipes);

  return (
    <>
      Recipes nutrients
      {/* <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <SearchForm />
      </div> */}
      {/* {recipes.isLoading ? (
        <Loading />
      ) : recipes.error ? (
        <h1> {recipes.error} </h1>
      ) : (
        <RecipesList recipes={recipes.items} />
      )} */}
    </>
  );
};

export default RecipesNutrients;
