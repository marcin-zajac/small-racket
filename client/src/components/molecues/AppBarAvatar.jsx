import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  name: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  initials: {
    fontSize: theme.spacing(12),
  },
}));

const AppBarAvatar = ({ user }) => {
  const classes = useStyles();
  const initials = `XZ`;

  return (
    <>
      <Grid container justify="center">
        <Avatar
          alt="Remy Sharp"
          src={user.avatarUrl}
          className={classes.avatar}
        >
          <p className={classes.initials}>{initials}</p>
        </Avatar>
        <Typography
          variant="h5"
          component="h2"
          className={classes.name}
          align="center"
        >
          {`${user.firstName} ${user.lastName}`}
        </Typography>
      </Grid>
    </>
  );
};

AppBarAvatar.propTypes = {};

export default AppBarAvatar;
