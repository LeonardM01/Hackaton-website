import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer.js';
import reporReducer from './reducers/reportReducer';
import trashcanReducer from './reducers/trashcanReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    reports: reporReducer,
    trashcans: trashcanReducer,
  },
});

export default store;
