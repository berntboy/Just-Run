import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllRunners from "./Runners";
import SingleRunner from "./SingleRunner";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";

const Main = () => {
  return (
    <Router>
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/runners" element={<AllRunners />} />
        <Route exact path="/runners/:id" element={<SingleRunner />} />
      </Routes>
    </Router>
  );
};

export default Main;
