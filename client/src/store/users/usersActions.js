import api from '../../utils/api';
import { GET_USERS, GET_USERS_ALERT, GET_CURRENT_USER } from '../actionTypes';

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/users');
    res.data.forEach((user) => {
      if (user.firstName && user.lastName){
        const initials = user.firstName.charAt(0) + user.lastName.charAt(0)
        user.initials = initials;
      }
      user['id'] = user['_id'];
    });
    dispatch({
      type: GET_USERS,
      payload: res.data, // all users
    });
  } catch (error) {
    const { errors } = error.response.data;
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

export const updateCurrentUserData = (formData) => async (dispatch) => {
  console.log(formData);
  // TODO: Update current ser data on server and return alert
};
