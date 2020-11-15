import { GET_USERS } from '../actions/types';

// test
const initialState = {
  allUsers: [],
  currentUserProfile: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: payload,
      };
  }
  return state;
}
