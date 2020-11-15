import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  ClickAwayListener,
  Portal,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Rocket from '../atoms/Rocket';
import MyProfileFormDialog from '../molecues/MyProfileForm/MyProfileFormDialog';

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
  logoutButton: {
    marginRight: theme.spacing(1),
  },
}));

function AppHeader({ title, subtitle, logout }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
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
        <Grid item xs={0}>
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
          <Grid container justify="space-between" alignItems='stretch' direction='row'>
            <Button
              variant="outlined"
              component={Link}
              to="/"
              onClick={logout}
              className={classes.logoutButton}
            >
              Logout
            </Button>

            <MyProfileFormDialog />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

AppHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default connect(null, { logout })(AppHeader);
