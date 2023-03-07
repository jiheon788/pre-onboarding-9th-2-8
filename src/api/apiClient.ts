import axios from 'axios';

const HOST = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: HOST,
});

export default apiClient;
