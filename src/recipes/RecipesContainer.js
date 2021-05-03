import React from "react";
import { useSelector } from "react-redux";

import RecipesList from "./RecipesList";
import Loading from "../components/Loading";

const RecipesContainer = () => {
  const recipes = useSelector((state) => state.recipes.items);
  return (
    <>
      {recipes.loading ? (
        <Loading />
      ) : (
        <RecipesList
          recipes={recipes}
          showCalInfo={false}
          showDeleteButton={false}
        />
      )}
    </>
  );
};

export default RecipesContainer;
