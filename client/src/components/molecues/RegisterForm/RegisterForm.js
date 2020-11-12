import React, { useState } from 'react';
import FormButton from '../../atoms/FormButton';
import { Slide, Paper, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthIcon from '../../atoms/AuthIcon';
import { register } from '../../../actions/auth';
import { connect } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
    width: '300px',
    height: theme.spacing(56),
    padding: theme.spacing(2),
  },
}));

const RegisterForm = ({register, ...props}) => {
  const classes = useStyles(props);

  const [formData, setformData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const { email, password, password2 } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    register(email, password, password2)
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <form onSubmit={onSubmit}>
          <Paper elevation={2} className={classes.root}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid item>
                <AuthIcon register />
              </Grid>

              <Grid item>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  onChange={onChange}
                  value={email}
                  fullWidth
                />
              </Grid>
              <Grid>
                <TextField
                  name="password"
                  label="password"
                  type="password"
                  value={password}
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
              <Grid>
                <TextField
                  name="password2"
                  label="retype password"
                  type="password"
                  value={password2}
                  onChange={onChange}
                  fullWidth
                />
              </Grid>
              <Grid item sm></Grid>

              <Grid item>
                <FormButton value="register" />
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Slide>
    </>
  );
};


export default connect(null, {register}) (RegisterForm)
