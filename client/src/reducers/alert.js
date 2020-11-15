import { LOGIN_ALERT, REGISTER_ALERT, GET_USERS_ALERT } from '../actions/types';

const initialState = {
  loginAlert: [],
  registerAlert: [],
  getUserAlert: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_ALERT:
      return { ...state, loginAlert: payload };
    case REGISTER_ALERT:
      return { ...state, registerAlert: payload };
    case GET_USERS_ALERT:
      return { ...state, getUserAlert: payload };

    default:
      return state;
  }
}
