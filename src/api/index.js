import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getAllPostsAPI = async (url) => client.get((url));
