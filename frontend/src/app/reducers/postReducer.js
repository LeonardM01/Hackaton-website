import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(posts, action) {
      return action.payload;
    },
    loadMorePosts(posts, action) {
      return [...posts, ...action.payload];
    },
    createPost(state, action) {
      return [...state, action.payload];
    },
    deletePost(state, action) {
      return state.filter((post) => post._id !== action.payload);
    },
  },
});

export const { getPosts, createPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
