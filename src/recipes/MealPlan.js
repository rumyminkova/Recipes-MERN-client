import React from "react";

const MealPlan = ({ meals }) => {
  return (
    <>
      <ul>
        {meals.meals.map((meal) => (
          <li>
            {meal.id}/{meal.title}
          </li>
        ))}
      </ul>
      <ul>
        <li>Cal - {meals.nutrients.calories}</li>
        <li>protein - {meals.nutrients.protein}</li>
        <li>fat - {meals.nutrients.fat}</li>
        <li>carbohydrates - {meals.nutrients.carbohydrates}</li>
      </ul>
    </>
  );
};

export default MealPlan;
