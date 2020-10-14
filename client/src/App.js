import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPage } from './views/LoginPage/LoginPage';
import { RegisterPage } from './views/RegisterPage/RegisterPage';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Navigation } from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <Container container maxWidth="sm" align="center">
        <Link to="/">
          <h2>///Small Rocket 🚀</h2>
        </Link>
        <Navigation />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
