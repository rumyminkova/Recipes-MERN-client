import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMeals } from "../actions/mealsActions";

import MealPlan from "../recipes/MealPlan";
import GenerateMealForm from "../components/GenerateMealForm";

const MealsPlanPage = () => {
  const meals = useSelector((state) => state.meals);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <GenerateMealForm />
      </div>

      {meals.loading ? (
        <h1> Loading </h1>
      ) : meals.error ? (
        <h1> {meals.error} </h1>
      ) : (
        <MealPlan meals={meals.meals} />
      )}
    </>
  );
};

export default MealsPlanPage;
