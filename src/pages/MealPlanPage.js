import React from "react";
import { useSelector } from "react-redux";

import MealPlan from "../recipes/MealPlan";
import GenerateMealForm from "../components/GenerateMealForm";
import Loading from "../components/Loading";

const MealsPlanPage = () => {
  const meals = useSelector((state) => state.meals);
  console.log(meals);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <GenerateMealForm />
      </div>
      {meals.loading ? (
        <Loading />
      ) : meals.error ? (
        <h1> {meals.error} </h1>
      ) : meals.meals ? (
        <MealPlan meals={meals.meals} />
      ) : null}
    </>
  );
};

export default MealsPlanPage;
