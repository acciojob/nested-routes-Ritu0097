import React from 'react';
import { useParams, Link, Route, Switch } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();

  return (
    <div>
      <h2>Women Items</h2>
      <ul>
        <li>
          <Link to={`/category/${categoryName}/grooming`}>Grooming</Link>
        </li>
        <li>
          <Link to={`/category/${categoryName}/shirt`}>Shirt</Link>
        </li>
        <li>
          <Link to={`/category/${categoryName}/trouser`}>Trouser</Link>
        </li>
        <li>
          <Link to={`/category/${categoryName}/jewellery`}>Jewellery</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/category/:categoryName/grooming">
          <p>Grooming</p>
        </Route>
        <Route path="/category/:categoryName/shirt">
          <p>Shirt</p>
        </Route>
        <Route path="/category/:categoryName/trouser">
          <p>Trouser</p>
        </Route>
        <Route path="/category/:categoryName/jewellery">
          <p>Jewellery</p>
        </Route>
      </Switch>
    </div>
  );
}

export default Category;
