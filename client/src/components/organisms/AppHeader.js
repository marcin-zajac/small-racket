import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

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

function AppHeader({ title, subtitle, logout }) {
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
          <Button
            variant="outlined"
            component={Link}
            // to="/"
            onClick={logout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

AppHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(AppHeader);
