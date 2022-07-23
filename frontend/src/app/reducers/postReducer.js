import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(posts, action) {
      return action.payload;
    },
    createPost(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { getPosts, createPost } = postSlice.actions;

export default postSlice.reducer;