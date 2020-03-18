import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import APAFormat from './screens/APA';
import MLAFormat from './screens/MLA';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/APAformat">APA Citation</Link>
          </li>
          <li>
            <Link to="/MLAformat">MLA Citation</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/APAformat">
          <APAFormat />
        </Route>
        <Route path="/MLAformat">
          <MLAFormat />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
