import { SET_ALERT } from '../rootReducer';

export const setInputAlert = (errors) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: errors });
};
