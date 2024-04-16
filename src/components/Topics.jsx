// Topics.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Topic from "./Topic";
function Topics() {
  return (
    <div>
      <p>Items:</p>
      <ul>
        <li>
          <Link to="Grooming">Grooming</Link>
        </li>
        <li>
          <Link to="Shirt">Shirt</Link>
        </li>
        <li>
          <Link to="Trouser">Trouser</Link>
        </li>
        <li>
          <Link to="Jewellery">Jewellery</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<div>Please select a topic.</div>} />
        <Route path=":topicId" element={<Topic />} />
      </Routes>
    </div>
  );
}
export default Topics;