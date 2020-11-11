import React from 'react';
import { Link } from 'react-router-dom';
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

export default function AppHeader({ title, subtitle }) {
  const classes = useStyles();
  return (
    <Paper component="div" className={classes.root}>
      {/* TODO:Improve gid layout */}
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="space-between"
      >
        <Grid item xs={1}>
          <Typography
            variant="h6"
            component="div"
            className={classes.pageTitle}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            className={classes.pageSubtitle}
          >
            {subtitle}
          </Typography>
        </Grid>
        <Grid item xs={1}>
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
          <Button variant="outlined" component={Link} to="/auth">
            Logout
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
