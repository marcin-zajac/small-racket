import React from 'react';
import AppBar from '../organisms/AppBar';
import Workers from '../views/Workers';
import AppHeader from '../organisms/AppHeader';
import { makeStyles } from '@material-ui/core';
import UserTable from '../organisms/UserTable';

const useStyles = makeStyles({
  main: {
    paddingLeft: '320px',
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <AppBar />
      <div className={classes.main}>
        <AppHeader />
        <Workers />
        <UserTable />
      </div>
    </>
  );
}
