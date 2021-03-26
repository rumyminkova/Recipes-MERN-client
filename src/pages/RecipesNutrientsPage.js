import React from "react";
import { useSelector } from "react-redux";

import RecipesList from "../recipes/RecipesList";
import NutritionsForm from "../components/forms/NutritionsForm";
import Loading from "../components/Loading";

const RecipesNutrients = () => {
  const recipes = useSelector((state) => state.nutrients);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <NutritionsForm />
      </div>
      {recipes.isLoading ? (
        <Loading />
      ) : recipes.error ? (
        <h1> {recipes.error} </h1>
      ) : (
        <RecipesList recipes={recipes.items} showCalInfo />
      )}
    </>
  );
};

export default RecipesNutrients;
