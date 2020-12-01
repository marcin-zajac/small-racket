import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthDialog from './AuthDialog';
import LoginForm from '../molecues/LoginForm';
import RegisterForm from '../molecues/RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    alignItems: 'stretch',
  },
}));

const Navigation = (props) => {
  const classes = useStyles(props);

  return (
    <nav>
      <ButtonGroup className={classes.root}>
        <AuthDialog name="Login" formComponent={<LoginForm />} />
        <AuthDialog name="Register" formComponent={<RegisterForm />} />
      </ButtonGroup>
    </nav>
  );
};


export default Navigation