import React from 'react';
import AppBar from '../organisms/AppBar';
import Workers from '../organisms/Workers';
import AppHeader from '../organisms/AppHeader';
import { makeStyles } from '@material-ui/core';
import UserTable from '../organisms/WorkersTable';

const useStyles = makeStyles({
  main: {
    paddingLeft: '320px',
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
