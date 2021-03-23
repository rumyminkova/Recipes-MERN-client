import React from "react";

import RecipeCard from "./recipe/RecipeCard";

const MealPlan = ({ meals }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-around mb-3">
          <div className="col-12 col-md-3">
            <ul>
              <li>Cal - {meals.nutrients.calories}</li>
              <li>protein - {meals.nutrients.protein}</li>
              <li>fat - {meals.nutrients.fat}</li>
              <li>carbohydrates - {meals.nutrients.carbohydrates}</li>
            </ul>
          </div>
          <div className="col-12 col-md-9">
            <div className="row justify-content-center">
              {meals.meals.map((meal) => (
                <RecipeCard recipe={meal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
