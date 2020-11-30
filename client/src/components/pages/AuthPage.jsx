import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AppLogo from '../atoms/AppLogo';
import  Navigation  from '../organisms/Navigation';
import { Container } from '@material-ui/core';

export default function AuthPage() {
  return (
    <Container maxWidth="sm" align="center">
      <Link to="/auth">
        <AppLogo />
      </Link>
      <Navigation />
    </Container>
  );
}
