import React, { Fragment } from "react";
import DisplaySizes from "./DisplaySizes";
const SizeRange = ({ sizes }) => {
  return (
    <Fragment>
      <h1 className="aside__heading">
        <i className="fas fa-utensils aside__icons"></i>Restaurants Size
      </h1>
      <div className="aside__options">
        <form action="GET" className="form__sizeRange">
          <div className="aside__labels aside__price-flex aside__sizeRange">
            <DisplaySizes sizes={sizes} />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SizeRange;
