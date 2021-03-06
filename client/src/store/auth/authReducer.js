import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  // REGISTER_SUCESS,
  LOGOUT,
} from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errors: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };

    default:
      return state;
  }
}
