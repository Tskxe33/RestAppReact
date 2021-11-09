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
        <section class="rest">
          <h1 class="rest__heading"></h1>
          <div class="rest__card-wrap"></div>
          <div class="rest__buttons">
            <button class="btn btn-login">LOAD MORE</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Restaurants;
