import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Slide, TextField, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormButton from '../../atoms/FormButton';
import AuthIcon from '../../atoms/AuthIcon';
import { login } from '../../../actions/auth';
import { connect } from 'react-redux';
import { getHelper } from '../../../utils/getHelper';
import AlertMessage from '../../atoms/AlertMessage';
import { Container } from '@material-ui/core';

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

const LoginForm = ({ login, errors, isAuthenticated, token, ...props }) => {
  const classes = useStyles(props);
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onSubmit = (e) => {
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
    <Container maxWidth="sm" align="center">
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
                <AlertMessage severity="error" type="loginAlert" />
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
    </Container>
  );
};

LoginForm.propTypes = {
  errors: PropTypes.array,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  errors: state.auth.errors,
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

export default connect(mapStateToProps, { login })(LoginForm);
