import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend.donat-pool.io',
});

export default api;
