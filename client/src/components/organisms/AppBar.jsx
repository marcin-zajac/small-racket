import React, { useEffect } from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import AppLogo from '../atoms/AppLogo';
import { Link } from 'react-router-dom';
import InWorkButtons from '../atoms/InWorkButtons';
import AppBarAvatar from '../molecues/AppBarAvatar';
import { getCurrentUser } from '../../store/users/usersActions';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
    padding: theme.spacing(3),
  },
  avatar: { display: 'flex', justifyContent: 'center' },
}));

function AppBar({ getCurrentUser, currentUser }) {
  useEffect(() => {
    getCurrentUser();
  }, []);
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      // alignItems="flex-start"
      className={classes.root}
    >
      <Grid item>
        <Link to="/">
          <Button variant="text" color="primary" fullWidth>
            <AppLogo variant="h6" />{' '}
          </Button>
        </Link>
      </Grid>
      <Grid item className={classes.avatar}>
        <AppBarAvatar user={currentUser}/>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/user/dashboard"
          variant="contained"
          color="primary"
          fullWidth
        >
          Who is on work?
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/user/helpdesk"
          variant="contained"
          color="primary"
          fullWidth
        >
          Helpdesk
        </Button>
      </Grid>
      <Grid item>
        <InWorkButtons />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});
AppBar.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getCurrentUser })(AppBar);
