import React from 'react';
import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  icon: {
    width: theme.spacing(4),
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
  },
  pageSubtitle: {
    paddingLeft: theme.spacing(4),
    opacity: 0.6,
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  return (
    <Paper component="div" className={classes.root}>
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="space-between"
      >
        <Grid item>
          <Typography
            variant="h6"
            component="div"
            className={classes.pageTitle}
          >
            View title
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            className={classes.pageSubtitle}
          >
            and subtitle
          </Typography>
        </Grid>
        <Grid item>
          <h2>
            <span role="img" aria-label="🧨">
              🧨
            </span>{' '}
            ACME TNT GENERATOR{' '}
            <span role="img" aria-label="💥">
              💥
            </span>{' '}
          </h2>
        </Grid>
        <Grid item>
          <Button variant="outlined">Logout</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
