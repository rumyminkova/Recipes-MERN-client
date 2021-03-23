import React from "react";
import { useSelector } from "react-redux";

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
