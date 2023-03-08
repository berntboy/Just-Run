import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllRunners from "./Runners";
import SingleRunner from "./SingleRunner";
// import Login from "./Login";
// import Signup from "./Signup";

const Main = () => {
  return (
    <Router>
      <nav>
        <ul>
          <Link to="/runners">All Runners</Link>
        </ul>
      </nav>
      <Routes>
        {/* <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/runners" element={<AllRunners />} />
        <Route exact path="/runners/:id" element={<SingleRunner />} />
      </Routes>
    </Router>
  );
};

export default Main;
