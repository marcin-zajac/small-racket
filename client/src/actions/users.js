import api from '../utils/api';
import { GET_USERS, GET_USERS_ALERT } from "./types";

export const getAllUsers = (token) => async (dispatch) => {
  try {
    const res = await api.get('/users');
    // TODO: get current user profilke by id from token
    // const allUsers = [res.data]
    // const currentUserProfile = allUsers.filter(user => user._id === token)
    // console.log(currentUserProfile, token);
    dispatch({
      type: GET_USERS,
      payload: [res.data], // all users
    });
  } catch (error) {
      const errors = error.response.data;
      dispatch({ type: GET_USERS_ALERT, payload: [errors] });
  }
};
