// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Topics from "./Topics.js";
function App() {
  return (
      <div>
        <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Items">Women</Link>
          </li>
        </ul>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Items/*"element={<Topics/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;