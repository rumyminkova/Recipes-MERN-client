import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMeals } from "../actions/mealsActions";

import MealPlan from "../recipes/MealPlan";
// import SearchForm from "../components/SearchForm";

const MealsPlanPage = () => {
  const meals = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  return (
    <>
      <h1> MealsPlan</h1>
      <button
        onClick={() =>
          dispatch(fetchMeals({ calories: 2000, diet: "", exclude: "" }))
        }
      >
        Meals
      </button>

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
