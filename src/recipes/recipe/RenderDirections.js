import React from "react";

const RenderDirections = ({ directions }) => {
  if (directions && directions.length) {
    const steps = directions[0].steps;
    return (
      <ol className="justify-content-left">
        {steps.map((step) => {
          return (
            <li key={step.number} className="my-4 p-3 ml-5 mr-3">
              {step.step}
            </li>
          );
        })}
      </ol>
    );
  }

  return <div>No directions found. See recipe source below</div>;
};

export default RenderDirections;
