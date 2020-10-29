import React from 'react';
import AppBar from '../organisms/AppBar';
import Workers from '../views/Workers';
import AppHeader from '../organisms/AppHeader';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    paddingLeft: '320px',
    width: '100%',
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
      </div>
    </>
  );
}
