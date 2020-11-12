import { SET_ALERT } from './types';

export const setInputAlert = (errors) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: errors });
};
