import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import api from '../../../utils/api';
import { makeStyles } from '@material-ui/core/styles';
import { Slide, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    marginTop: theme.spacing(4),
    border: 0,
    color: 'white',
    background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
    boxShadow: '0 3px 5px 2px rgba(102, 255, 255, .4)',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(5),
      width: theme.spacing(35),
      height: theme.spacing(32),
      padding: theme.spacing(2),
    },
  },
}));

export const RegisterForm = (props) => {
  const classes = useStyles(props);

  const [formData, setformData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const { email, password, password2 } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post('/users/register', formData);

    console.log(res);
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // TODO: Handle submit form to server
  const onClick = (e) => {
    console.log('onClick function');
  };
  return (
    <>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <form onSubmit={onSubmit}>
          <Container maxWidth="xs" className={classes.paper}>
            <Paper elevation={2}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={201}
              >
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
                <Grid>
                  <Button
                    type="submit"
                    variant="outlined"
                    margin="normal"
                    className={classes.loginBtn}
                    onClick={onClick}
                    fullWidth
                  >
                    register
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
