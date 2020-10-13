import React, { useState } from 'react';
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
      <h3>Login view</h3>
      <form onSubmit={onSubmit}>
        <ul>
          <li>
            <input
              type="email"
              name="email"
              placeholder="email adress"
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
        </ul>
        {/* <button type="submit"  >Send your message</button> */}
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
