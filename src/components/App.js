// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Topics from "./Topics.js";
function App() {
  return (
    <BrowserRouter>
    <main>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
        </ul>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Women/*"element={<Topics/>} />
        </Routes>
      </div>
      </main>
      </BrowserRouter>
  );
}
export default App;