// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/women"><p>Women</p></Link>
          </li>
          {/* Add more category links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
