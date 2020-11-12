import api from '../utils/api';
import { LOGIN_FAIL, SET_ALERT } from './types';
import { setInputAlert } from './setInputAlert';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    console.log('TOKEN', res.data);
  } catch (error) {
    if (error) {
      const errors = error.response.data.errors;
      dispatch({ type: LOGIN_FAIL, payload: errors });
      if (error.response.status === 400 || 500) {
        // TODO: handle invalid credentials
        console.log('status 400');
        dispatch({ type: SET_ALERT, payload: errors.msg });
      }
    }
  }
};

export const register = (email, password, password2) => async (dispatch) => {
  try {
    const res = await api.post('/auth/register', {
      email,
      password,
      password2,
    });
    console.log(res.data);
  } catch (error) {
    if (error) {
      const errors = error.response.data.errors;
      errors.forEach((error) => {
        console.log(error.msg);
      });
    }
  }
};
