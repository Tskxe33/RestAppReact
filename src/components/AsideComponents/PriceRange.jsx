import React, { Fragment } from "react";
import DisplayPrices from "./DisplayPrices";
const PriceRange = ({ prices }) => {
  return (
    <Fragment>
      <h1 className="aside__heading">
        <i className="fas fa-money-bill-alt aside__icons"></i>Price Range
      </h1>
      <div className="aside__options">
        <form action="GET" className="form__priceRange">
          <div className="aside__labels aside__price-flex">
            <DisplayPrices prices={prices} />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default PriceRange;
