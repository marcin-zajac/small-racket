import { combineReducers } from 'redux';
import users from './users/usersReducer';
import auth from './auth/authReducer';
import alert from './alert/alertReducer';

export default combineReducers({
  users,
  auth,
  alert,
});
