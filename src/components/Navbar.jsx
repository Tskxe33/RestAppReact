import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/logoImage.png";
import NavBarButtons from "./NavbarButtons";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <nav className="nav">
            <div className="nav__navigation">
              <ul className="nav__list">
                <li className="nav__items">
                  <Link to="/" className="nav__links">
                    Home
                  </Link>
                </li>
                <li className="nav__items">
                  <Link to="restaurants" className="nav__links">
                    Find Restaurants
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav__logo">
              <img
                src={logoImage}
                className="logo animate__animated animate__tada"
              />
            </div>
            <NavBarButtons />
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default NavBar;
