import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "./recipe/RecipeCard";

const RecipesList = () => {
  const recipes = useSelector((state) => state.recipes.items);
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {recipe.id}
          {recipe.title}
          {/* <RecipeCard recipe={recipe} /> */}
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
