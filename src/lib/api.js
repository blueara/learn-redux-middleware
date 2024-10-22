import axios from "axios";

export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typecode.com/posts/${id}`);

export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typecode.com/users`);
