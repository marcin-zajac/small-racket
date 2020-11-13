import { LOGIN_ALERT, REGISTER_ALERT } from '../actions/types';

const initialState = {
  loginAlert: [],
  registerAlert: []
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_ALERT:
      return {...state, loginAlert: payload};
    case REGISTER_ALERT:
      return {...state, registerAlert: payload};

    default:
      return state;
  }
}
