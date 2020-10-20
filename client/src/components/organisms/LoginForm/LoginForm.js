import React, { useState } from 'react';
import api from '../../../utils/api';
import {
  Button,
  Slide,
  TextField,
  Paper,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    marginTop: theme.spacing(4),
    border: 0,
    color: 'white',
    background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
    boxShadow: '0 3px 5px 2px rgba(102, 255, 255, .4)',
    width: '100%',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(5),
      width: theme.spacing(35),
      height: theme.spacing(26),
      padding: theme.spacing(2),
    },
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
          <Container maxWidth="xs" mt={2} className={classes.paper}>
            <Paper elevation={2}>
              <Grid container direction="column">
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
                <Grid>
                  <Button
                    type="submit"
                    variant="outlined"
                    className={classes.loginBtn}
                  >
                    login
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </form>
      </Slide>
    </>
  );
};
