import React from "react";

const DisplaySizes = ({ sizes }) => {
  return sizes.map((size) => {
    return (
      <label
        id={size.label}
        key={size.label}
        className="aside__label aside__priceRange active-container"
      >
        {size.note}
        <input
          type="checkbox"
          className="checkbox checkbox-priceRange"
          name={size.label}
        />
      </label>
    );
  });
};

export default DisplaySizes;
