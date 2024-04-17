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
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Women">Women</a>
          </li>
        </ul>
        </nav>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/women/*"element={<Topics/>} />
        </Routes>
      </div>
      </main>
      </BrowserRouter>
  );
}
export default App;