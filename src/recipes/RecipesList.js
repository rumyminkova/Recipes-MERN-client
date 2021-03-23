import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "./recipe/RecipeCard";

const RecipesList = () => {
  const recipes = useSelector((state) => state.recipes.items);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-3">
        {recipes.map((recipe) => (
          <div
            className="col-11 col-sm-6 col-md-4 col-lg-3 col-xl-2  my-5 mx-5 mx-md-3 p-0 recipe-card"
            key={recipe.id}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
