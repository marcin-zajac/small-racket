import React, { useState } from 'react';
import api from '../../../utils/api';
import { Slide, TextField, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormButton from '../../atoms/FormButton';
import AuthIcon from '../../atoms/AuthIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5),
    width: '100%',
    height: theme.spacing(50),
    padding: theme.spacing(2),
  },
}));

export const LoginForm = (props) => {
  const classes = useStyles(props);
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // TODO: Handle submit form to server
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/users/login', formData);
    console.log(res);
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
                <TextField
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
              <Grid>
                <FormButton value="login" />
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Slide>
    </>
  );
};
