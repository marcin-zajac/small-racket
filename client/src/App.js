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
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route path="/auth">
            <Container maxWidth="sm" align="center">
              <Link to="/auth">
                <AppLogo />
              </Link>
              <Navigation />
              <Switch>
                <Route path="/auth/login">
                  <LoginForm />
                </Route>
                <Route path="/auth/register">
                  <RegisterForm />
                </Route>
              </Switch>
            </Container>
          </Route>
          <Route exact path="/">
              <Dashboard />
          </Route>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
