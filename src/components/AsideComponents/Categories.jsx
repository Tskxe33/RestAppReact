import React, { Fragment } from "react";
import DisplayCategories from "./DisplayCategories";
const Categories = ({ categories }) => {
  return (
    <Fragment>
      <h1 className="aside__heading">
        <i className="fas fa-pizza-slice aside__icons"></i>Categories
      </h1>
      <form action="GET" className="form__categories">
        <div className="categories-container aside__labels">
          <DisplayCategories categories={categories} />
        </div>
        <div className="grid-categories anyALL-boxes">
          <button className="btn btn-login u-margin-right" id="all">
            ALL
          </button>
          <button className="btn btn-login" id="any">
            ANY
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Categories;
