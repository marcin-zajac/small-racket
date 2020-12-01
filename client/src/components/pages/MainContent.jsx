import React from 'react';
import AppBar from '../organisms/AppBar';
import Workers from '../organisms/Workers';
import AppHeader from '../organisms/AppHeader';
import { makeStyles } from '@material-ui/core';
import WorkersTable from '../organisms/WorkersTable';
import { Redirect, Route, Switch } from 'react-router-dom';
import Helpdesk from '../views/Helpdesk';
import WorkersDataGrid from '../organisms/WorkersDataGrid';
const useStyles = makeStyles({
  main: {
    paddingLeft: '320px',
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function MainContent() {
  const classes = useStyles();

  return (
    <>
      <Route path="/user">
        <AppBar />
        <Redirect to="/user/dashboard" />
        <div className={classes.main}>
          <Switch>
            <Route path="/user/dashboard">
              <AppHeader title="Workers table" subtitle="component" />
              <Workers />
              <WorkersTable />
            </Route>

            <Route path="/user/helpdesk">
              <AppHeader title="Helpdesk" subtitle="component" />
              <Helpdesk />
              <WorkersDataGrid />
            </Route>
          </Switch>
        </div>
      </Route>
    </>
  );
}
