import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LoginForm } from './components/molecues/LoginForm/LoginForm';
import { RegisterForm } from './components/molecues/RegisterForm/RegisterForm';
import { Navigation } from './components/molecues/Navigation/Navigation';
import { ThemeProvider } from '@material-ui/core/styles';
import AppLogo from './components/atoms/AppLogo';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" align="center">
          <Switch>
            <Route exact path="/">
              <Link to="/">
                <AppLogo />
              </Link>
              <Navigation />
            </Route>
            <Route path="/login">
              <Link to="/">
                <AppLogo />
              </Link>
              <Navigation />
              <LoginForm />
            </Route>
            <Route path="/register">
              <Link to="/">
                <AppLogo />
              </Link>
              <Navigation />
              <RegisterForm />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
