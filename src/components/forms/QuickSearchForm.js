import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchRecipes } from "../../actions/recipesActions";
import "./Forms.css";
import { QUICK_MENU } from "../../shared/data";
import QuickMenuItem from "./QuickMenuItem";

const QuickSearchForm = () => {
  return (
    <div className="container search-form_container my-5 py-5 ">
      <h2 className="text-center mx-auto mt-3 mb-1">Quick Search</h2>

      <div className="row my-md-3 justify-content-around">
        {QUICK_MENU.map((menuItem) => (
          <div className="col-6 col-lg-3 pt-3 mb-3 mb-md-1" key={menuItem.id}>
            <QuickMenuItem item={menuItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickSearchForm;