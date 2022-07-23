import * as api from '../api/index';

export const getPosts = (numSkip) => async (dispatch) => {
  try {
    const { data } = await api.getPosts(numSkip);
    dispatch({ type: 'posts/getPosts', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(formData);
    dispatch({ type: 'posts/createPost', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    // Api delete post
    const { data } = postId;
    dispatch({ type: 'posts/deletePost', payload: data });
  } catch (error) {
    console.log(error);
  }
};
