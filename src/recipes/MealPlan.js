import React from "react";

import RecipeCard from "./recipe/RecipeCard";
import "./MealPlan.css";

const MealPlan = ({ meals }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-around mb-3">
          <div className="col-12 col-md-3">
            <div className="d-flex justify-content-around align-items-center mealplan_info">
              <ul className="calories-info">
                <li>Calories</li>
                <li>Protein </li>
                <li>Fat </li>
                <li>Carbs</li>
              </ul>
              <ul className="text-right calories-info">
                <li>{meals.nutrients.calories}</li>
                <li>{meals.nutrients.protein}</li>
                <li>{meals.nutrients.fat}</li>
                <li>{meals.nutrients.carbohydrates}</li>
              </ul>
            </div>
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
