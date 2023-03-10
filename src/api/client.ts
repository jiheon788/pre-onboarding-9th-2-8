import axios from 'axios';

const baseURL =
  window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';

export const axiosInstance = axios.create({
  baseURL,
});
