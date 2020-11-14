import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import Rocket from '../atoms/Rocket';
import AuthPage from '../pages/AuthPage';
import MainContent from '../pages/MainContent';

export default function Routes() {
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Route exact path="/auth" component={Rocket} />
      <Route path="/user" component={MainContent} />
      <Route exact path="/">
        <Redirect to="/user" /> 
      </Route>
    </Switch>
  );
}
