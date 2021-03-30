import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { Transform } from "react-animation-components";

import "./Preloader.css";

const Preloader = () => {
  return (
    <Transform
      enterTransform="translateX(100%)"
      in
      transitionDuration={5000}
      transitionDelay={2000}
    >
      <div className="preloader-container">
        <div className="text-center text-md-right preloader-banner">
          <p className="special-font preloader-font">
            <ImSpoonKnife className="preloader-icon mr-3" />
            Recipes
          </p>
          <h1 className="mb-5 preloader-text__2">your digital Cookbook</h1>
        </div>
        <div className="p-3 text-bold">
          <span className="text-dark unsplash-text">
            Photo by{" "}
            <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Ella Olsson
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/cutting-board?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </Transform>
  );
};

export default Preloader;
