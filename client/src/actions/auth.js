import api from '../utils/api';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    console.log(res.data);
  } catch (error) {
    if (error) {
      const errors = error.response.data.errors;
      errors.forEach((error) => {
        console.log(error.msg);
      });
    }
  }
};
export const register = (email, password, password2) => async (dispatch) => {
  console.log('cccccccc');
  try {
    const res = await api.post('/auth/register', { email, password, password2 });
    console.log(res.data);
  } catch (error) {
    if (error) {
      const errors = error.response.data.errors;
      errors.forEach((error) => {
        console.log(error.msg);
      });
    }
  }
};
