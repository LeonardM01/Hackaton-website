export const createUser = (newUser) => async (dispatch) => {
  try {
    // Api call to create user api.createUser(newUser)
    const { data } = newUser;
    dispatch({ type: 'auth/create', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userInfo) => async (dispatch) => {
  try {
    // Api call to login user api.loginUser(userInfo)
    const { data } = userInfo;

    dispatch({ type: 'auth/login', payload: data });
  } catch (error) {
    console.log(error);
  }
};
