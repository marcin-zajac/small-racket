import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import api from '../../utils/api';

export const RegisterPage = () => {
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
  return (
    <>
      <form onSubmit={onSubmit}>
        <Container maxWidth="xs">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={201}
          >
            <TextField
              name="email"
              label="Email"
              type="email"
              onChange={onChange}
              value={email}
            />
            <TextField
              name="password"
              label="password"
              type="password"
              value={password}
              onChange={onChange}
            />
            <TextField
              name="password2"
              label="retype password"
              type="password"
              value={password2}
              onChange={onChange}
            />
            <Button type="submit" variant="outlined">
              register
            </Button>
          </Grid>
        </Container>
      </form>
    </>
  );
};
