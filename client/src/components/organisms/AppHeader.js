import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  icon: {
    width: theme.spacing(2),
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  return (
    <Paper component='div' className={classes.root}>
      <SupervisedUserCircleIcon fontSize="large" />
    </Paper>
  );
}
