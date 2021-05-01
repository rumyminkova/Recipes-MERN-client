import React from "react";

import QuickSearchForm from "../components/forms/QuickSearchForm";
import RecipesContainer from "../recipes/RecipesContainer";

const Home = () => {
  return (
    <>
       <div className="container">
        <div className="row justify-content-center">
          <div className="col my-5">
            <QuickSearchForm />
          </div>
        </div>
      </div>
      <RecipesContainer />
    </>
  );
};

export default Home;
