import React from "react";

const DisplayPrices = ({ prices }) => {
  return prices.map((price) => {
    return (
      <label
        key={price.toolTip}
        id={price.toolTip}
        className="aside__label aside__priceRange active-container"
      >
        {" "}
        {price.label}
        <input
          name={price.toolTip}
          type="checkbox"
          className="checkbox checkbox-priceRange"
        />
      </label>
    );
  });
};

export default DisplayPrices;
