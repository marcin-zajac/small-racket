import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import AppLogo from '../atoms/AppLogo';
import { Link } from 'react-router-dom';
import InWorkButtons from '../atoms/InWorkButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
    padding: theme.spacing(3),
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="stretch"
      className={classes.root}
    >
      <Grid item>
        <Link to="/">
          <Button variant="text" color="primary" fullWidth>
            <AppLogo variant="h6" />{' '}
          </Button>
        </Link>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item>
        <Button variant="contained" color="primary" fullWidth>
          Item 1
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" fullWidth>
          Item 3
        </Button>
      </Grid>
      <Grid item>
<InWorkButtons/>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}
