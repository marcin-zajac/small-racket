import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthIcon from '../atoms/AuthIcon';
import { login } from '../../store/auth/authActions';
import FormButton from '../atoms/FormButton';
import { getHelper } from '../../utils/getHelper';
import AlertMessage from '../atoms/AlertMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
    width: '300px',
    minHeight: theme.spacing(56),
    padding: theme.spacing(2),
  },
  formBtn: { marginTop: theme.spacing(5) },
}));

const LoginForm = ({
  login,
  errors,
  clearErrors,
  alerts,
  isAuthenticated,
  ...props
}) => {
  const classes = useStyles(props);

  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  // Redirect if loged in
  if (isAuthenticated) {
    return <Redirect to="/user/dashboard" />;
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid container justify="center">
          <AuthIcon login />
        </Grid>

        <Grid item>
          <AlertMessage severity="error" type="loginAlert" />
        </Grid>

        <Grid item>
          <TextField
            error={getHelper(errors, 'email').isError}
            helperText={getHelper(errors, 'email').message}
            type="email"
            name="email"
            label="Email"
            onChange={onChange}
            value={email}
            fullWidth
          />
        </Grid>

        <Grid item>
          <TextField
            error={getHelper(errors, 'password').isError}
            helperText={getHelper(errors, 'password').message}
            name="password"
            label="password"
            type="password"
            value={password}
            onChange={onChange}
            fullWidth
          />
        </Grid>

        <Grid item sm></Grid>

        <Grid className={classes.formBtn} item>
          <FormButton value="login" type="submit" />
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => ({
  errors: state.auth.errors,
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

export default connect(mapStateToProps, { login })(LoginForm);
