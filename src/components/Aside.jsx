import React, { Component } from "react";

class Aside extends Component {
  state = {
    categoriesList: [
      `italian`,
      `pizzerian`,
      `vegetarian`,
      `organic`,
      `international`,
      `chinese`,
    ],
  };
  render() {
    return (
      <aside className="aside">
        <h1 className="aside__heading">
          <i className="fas fa-money-bill-alt aside__icons"></i>Price Range
        </h1>
        <div className="aside__options">
          <form action="GET" className="form__priceRange">
            <div className="aside__labels aside__price-flex"></div>
          </form>
        </div>

        <h1 className="aside__heading">
          <i className="fas fa-utensils aside__icons"></i>Restaurants Size
        </h1>
        <div className="aside__options">
          <form action="GET" className="form__sizeRange">
            <div className="aside__labels aside__price-flex aside__sizeRange"></div>
          </form>
        </div>

        <h1 className="aside__heading">
          <i className="fas fa-clock aside__icons"></i>Working Time
        </h1>
        <div className="aside__options">
          <div className="aside__checkbox">
            <form action="GET" className="form__currentOpen">
              <label className="aside__label">
                current open
                <input
                  id="current"
                  type="checkbox"
                  className="current-open"
                  name="current"
                />
              </label>
            </form>
            <form action="GET" className="form__specifiedTime">
              <label className="aside__label">
                specified
                <input
                  type="number"
                  max="24"
                  min="1"
                  id="aside__specificTime"
                  name="Specified"
                />
              </label>
            </form>
          </div>
        </div>

        <h1 className="aside__heading">
          <i className="fas fa-pizza-slice aside__icons"></i>Categories
        </h1>
        <form action="GET" className="form__categories">
          <div className="categories-container aside__labels"></div>
          <div className="grid-categories anyALL-boxes">
            <button className="btn btn-login u-margin-right" id="all">
              ALL
            </button>
            <button className="btn btn-login" id="any">
              ANY
            </button>
          </div>
        </form>
      </aside>
    );
  }
}

export default Aside;
