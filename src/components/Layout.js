// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/women">Women</Link>
          </li>
        </ul>
    </div>
  );
}

export default Layout;
