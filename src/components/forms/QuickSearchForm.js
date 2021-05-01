import React from "react";
import { useDispatch } from "react-redux";

import { QUICK_MENU } from "../../shared/data";
import QuickMenuItem from "./QuickMenuItem";
import { fetchRecipes } from "../../actions/recipes/recipesActions";
import "./Forms.css";

const QuickSearchForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="container search-form_container mb-5 py-3">
      <h2 className="text-center mx-auto mt-3 mb-1">Quick Search</h2>

      <div className="row my-md-3 justify-content-around">
        {QUICK_MENU.map((menuItem) => (
          <div className="col-6 col-lg-3 pt-3 mb-3 mb-md-1" key={menuItem.id}>
            <QuickMenuItem
              item={menuItem}
              handleClick={() =>
                dispatch(
                  fetchRecipes({
                    searchTerm: menuItem.searchTerm,
                    dishType: "",
                    diet: "",
                    cuisine: "",
                  })
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickSearchForm;
