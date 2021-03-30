import React from "react";

import RecipesContainer from "../recipes/RecipesContainer";
import SearchForm from "../components/forms/SearchForm";

const RecipesSearchPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5 search-container mx-auto">
        <SearchForm />
      </div>

      <RecipesContainer />
    </>
  );
};

export default RecipesSearchPage;
