import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
