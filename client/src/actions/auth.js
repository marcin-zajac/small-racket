import api from '../utils/api';
import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGIN_ALERT,
  REGISTER_ALERT,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // Token
    });
  } catch (error) {
    const { errors } = error.response.data;
    
    if ((error && error.response.status === 400) || 500) {
      dispatch({ type: LOGIN_ALERT, payload: errors });
      return;
    }
    if (error) {
      dispatch({ type: LOGIN_FAIL, payload: errors });
    }
  }
};

export const register = (email, password, password2) => async (dispatch) => {
  if (password !== password2) {
    const errors = {
      msg: 'Password do not match ',
      param: 'password2',
    };
    dispatch({ type: REGISTER_FAIL, payload: [errors] });
    return;
  }
  try {
    const res = await api.post('/auth/register', {
      email,
      password,
      password2,
    });
  } catch (error) {
    const { errors } = error.response.data;
    if ((error && error.response.status === 400) || 500) {
      dispatch({ type: REGISTER_ALERT, payload: errors });
      return;
    }
    if (error) {
      dispatch({ type: REGISTER_FAIL, payload: errors });
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS, payload: [] });
};
