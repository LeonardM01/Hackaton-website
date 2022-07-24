import * as api from '../api/index.js';

export const createUser = (newUser, navigate) => async (dispatch) => {
  try {
    // Api call to create user api.createUser(newUser)
    const { data } = await api.createUser(newUser);
    dispatch({ type: 'auth/create', payload: data });
    navigate('/');
  } catch (error) {
    console.log(error);
    dispatch({ type: 'auth/create', payload: error.response.data });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    // Api call to create user api.createUser(newUser)
    const { data } = await api.getUsers();
    dispatch({ type: 'auth/create', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userInfo, navigate) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userInfo);
    dispatch({ type: 'auth/login', payload: data });
    navigate('/');
  } catch (error) {
    console.log(error);
    dispatch({ type: 'auth/login', payload: error.response.data });
  }
};
