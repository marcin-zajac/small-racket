import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Slide, TextField, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormButton from '../../atoms/FormButton';
import AuthIcon from '../../atoms/AuthIcon';
import { login } from '../../../actions/auth';
import { connect } from 'react-redux';
import { getHelper } from '../../../utils/getHelper';
import AlertMessage from '../../atoms/AlertMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
    width: '300px',
    minHeight: theme.spacing(50),
    padding: theme.spacing(2),
  },
  formBtn: { marginTop: theme.spacing(5) },
}));

const LoginForm = ({ login, errors, ...props }) => {
  const classes = useStyles(props);
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // TODO: Handle errors from server
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <form onSubmit={onSubmit}>
          <Paper elevation={2} className={classes.root}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item>
                <AuthIcon login />
              </Grid>
              <Grid item>
                <AlertMessage severity="error" type="loginAlert"/>
              </Grid>
              <Grid item>
                <TextField
                  error={getHelper(errors, 'email').isError}
                  helperText={getHelper(errors, 'email').message}
                  type="email"
                  name="email"
                  id="standard-basic"
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
                  id="standard-basic"
                  label="password"
                  type="password"
                  value={password}
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
              <Grid item sm></Grid>
              <Grid className={classes.formBtn} item>
                <FormButton value="login" />
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Slide>
    </>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.auth.errors,
});
export default connect(mapStateToProps, { login })(LoginForm);
