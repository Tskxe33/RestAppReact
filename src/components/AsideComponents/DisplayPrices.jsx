import React from "react";

const DisplayPrices = ({ prices }) => {
  let labelCount = "$";
  return prices
    .map((price) => {
      labelCount += "$";
      return `
    <label id="${price.toolTip}" class="aside__label aside__priceRange active-container"
    >${labelCount}
    <input
      name='${price.toolTip}'
      type="checkbox"
      class="checkbox checkbox-priceRange"
    />
  </label>
  `;
    })
    .join("");
};

export default DisplayPrices;
