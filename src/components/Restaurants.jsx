import React, { Component } from "react";
import Aside from "./Aside";

class Restaurants extends Component {
  state = {
    restaurants: [],
  };
  render() {
    return (
      <div>
        <Aside />
        <section className="rest">
          <h1 className="rest__heading"></h1>
          <div className="rest__card-wrap"></div>
          <div className="rest__buttons">
            <button className="btn btn-login">LOAD MORE</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Restaurants;
