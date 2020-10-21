import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LoginForm } from './components/molecues/LoginForm/LoginForm';
import { RegisterForm } from './components/molecues/RegisterForm/RegisterForm';
import { Navigation } from './components/molecues/Navigation/Navigation';
import { ThemeProvider } from '@material-ui/core/styles';
import AppLogo from './components/atoms/AppLogo'


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" align="center">
          <Link to="/">
            <AppLogo/>
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
