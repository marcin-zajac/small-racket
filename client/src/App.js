import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginForm } from './components/organisms/LoginForm/LoginForm';
import Container from '@material-ui/core/Container';
import { Navigation } from './components/molecues/Navigation/Navigation';
import { Typography } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RegisterForm } from './components/organisms/RegisterForm/RegisterForm';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container container maxWidth="sm" align="center">
          <Link to="/">
            <Typography variant="h4" component="h1">
            ///Small Rocket 🚀
            </Typography>
          </Link>
          <Navigation />
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
