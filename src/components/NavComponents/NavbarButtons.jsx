import React from "react";
const NavBarButtons = () => {
  return (
    <div className="nav__buttons">
      <div className="nav__login">
        <button className="btn btn-login">Sign in</button>
      </div>
      <div className="nav__register">
        <button className="btn btn-register">Sign up</button>
      </div>
    </div>
  );
};

export default NavBarButtons;
