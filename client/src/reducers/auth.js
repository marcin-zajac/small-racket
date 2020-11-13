import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  // LOGIN_SUCESS,
  REGISTER_FAIL,
  // REGISTER_SUCESS,
  // LOGOUT,
  SET_ALERT,
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // TODO: remove auth token from browser memory
    // case LOGIN_SUCESS:
    //   return { ...state};
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return { ...state, errors: payload};
    case CLEAR_ERRORS:
      return { ...state, errors: []};

    default:
      return state;
  }
}
