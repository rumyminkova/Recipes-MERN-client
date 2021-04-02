import React from "react";

import RecipeCard from "./recipe/RecipeCard";

const RecipesList = ({ recipes, showCalInfo }) => {
  const recipesList = recipes.map((recipe) => {
    if (!recipe.id) {
      return { ...recipe, id: recipe.api_id };
    }
    return recipe;
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-3">
        {recipesList.map((recipe) => (
          <div
            className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-5 mx-5 mx-md-3 p-0 recipe-card"
            key={recipe.id}
          >
            <RecipeCard recipe={recipe} showCalInfo={showCalInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
