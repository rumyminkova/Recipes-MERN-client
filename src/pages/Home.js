import React from "react";

import QuickSearchForm from "../components/forms/QuickSearchForm";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col my-5">
          <QuickSearchForm />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col my-5">
          <h1 className="display-3 px-5 home_banner">
            "No one is born a great cook, one learns by doing"
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
