import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Detailed from "./pages/Detailed";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path={"/:location"} element={<Detailed />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
