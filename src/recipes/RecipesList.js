import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "./recipe/RecipeCard";

const RecipesList = () => {
  const recipes = useSelector((state) => state.recipes.items);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
