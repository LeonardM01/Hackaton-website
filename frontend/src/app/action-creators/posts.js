export const getPosts = () => async (dispatch) => {
  try {
    // Api call to fetch getPosts
    const { data } = {};
    dispatch({ type: 'posts/getPosts', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    // Api call to fetch create post api.createPost(post)
    const { data } = post;
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
  } catch (error) {}
};
