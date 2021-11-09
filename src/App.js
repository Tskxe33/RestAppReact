import React, { Fragment } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
