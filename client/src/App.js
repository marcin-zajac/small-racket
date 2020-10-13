import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPage } from './views/LoginPage/LoginPage';
import { RegisterPage } from './views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Link to="/">
        <h2>///Small Rocket 🚀</h2>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
