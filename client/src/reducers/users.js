import { GET_USERS, GET_CURRENT_USER } from '../actions/types';

// test
const initialState = {
  allUsers: [],
  currentUser: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
}
