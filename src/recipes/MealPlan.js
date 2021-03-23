import React from "react";

import RecipeCard from "./recipe/RecipeCard";
import "./MealPlan.css";

const MealPlan = ({ meals }) => {
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-end">
          <div className="col-12 col-md-5">
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
        </div>
        <div className="row justify-content-around my-5">
          {meals.meals.map((meal) => (
            <div className="col-12 col-md-6 col-lg-4" key={meal.id}>
              <RecipeCard recipe={meal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
