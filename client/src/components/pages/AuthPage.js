import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AppLogo from '../atoms/AppLogo';
import  LoginForm  from '../molecues/LoginForm/LoginForm';
import { Navigation } from '../molecues/Navigation/Navigation';
import RegisterForm from '../molecues/RegisterForm/RegisterForm';
import { Container } from '@material-ui/core';

export default function AuthPage() {
  return (
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
  );
}
