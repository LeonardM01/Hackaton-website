import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getPosts = (numSkip) => API.get(`/posts/getPost?numSkip=${numSkip}`);
export const createPost = (newPost) => API.post('/posts/createPost', newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const loginUser = (formData) => API.post('/user/login', formData);
export const createUser = (formData) => API.post('/user/create', formData);