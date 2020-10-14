import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import api from '../../utils/api';

export const LoginPage = () => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const { email, password, password2 } = formData;
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
      <form onSubmit={onSubmit}>
        <Container maxWidth="xs" mt={2}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="stretch"
          >
            <TextField
              type="email"
              name="email"
              id="standard-basic"
              label="Email"
              type="email"
              onChange={onChange}
              value={email}
            />
            <TextField
              type="text"
              name="password"
              id="standard-basic"
              label="password"
              type="password"
              value={password}
              onChange={onChange}
            />
            <Button type="submit" variant="outlined">
              login
            </Button>
          </Grid>
        </Container>
      </form>
    </>
  );
};
