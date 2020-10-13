import React, { useState } from 'react';
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
      <h3>Register view</h3>

      <form onSubmit={onSubmit}>
        <ul>
          <li>
            <input
              type="email"
              placeholder="email adress"
              name="email"
              value={email}
              onChange={onChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="password"
              placeholder="password"
              value={password}
              onChange={onChange}
            />
          </li>
          <li>
            <input
              type="password"
              name="password2"
              placeholder="retype password"
              value={password2}
              onChange={onChange}
            />
          </li>
        </ul>
        <input type="submit" value="Register" />
      </form>
    </>
  );
};
