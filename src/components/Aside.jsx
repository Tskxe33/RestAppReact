import React, { Component } from "react";
import axios from "axios";
import DisplayPrices from "./AsideComponents/DisplayPrices";
import DisplaySizes from "./AsideComponents/DisplaySizes";
import { fetchPrices } from "./../modules/prices";
import { fetchSizes } from "./../modules/sizes";
import PriceRange from "./AsideComponents/PriceRange";
import SizeRange from "./AsideComponents/SizeRange";
import WorkingTime from "./AsideComponents/Workingtime";
import Categories from "./AsideComponents/Categories";
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

    prices: [],
    sizes: [],
  };

  getPrices = async () => {
    const prices = await fetchPrices();
    this.setState({ prices });
  };

  getSizes = async () => {
    const sizes = await fetchSizes();
    this.setState({ sizes });
  };

  componentDidMount() {
    this.getPrices();
    this.getSizes();
  }

  render() {
    return (
      <aside className="aside">
        <PriceRange prices={this.state.prices} />
        <SizeRange sizes={this.state.sizes} />
        <WorkingTime />
        <Categories categories={this.state.categoriesList} />
      </aside>
    );
  }
}

export default Aside;
