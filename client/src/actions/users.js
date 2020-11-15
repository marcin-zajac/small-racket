import api from '../utils/api';
import { GET_USERS, GET_USERS_ALERT, GET_CURRENT_USER } from './types';

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/users');
    dispatch({
      type: GET_USERS,
      payload: [res.data], // all users
    });
  } catch (error) {
    const errors = error.response.data;
    dispatch({ type: GET_USERS_ALERT, payload: [errors] });
  }
};
export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await api.get('/users/me');

    dispatch({
      type: GET_CURRENT_USER,
      payload: res.data[0],
    });
  } catch (error) {
    const errors = error.response.data;
    dispatch({ type: GET_USERS_ALERT, payload: [errors] });
  }
};
