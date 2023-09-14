import axios from 'axios';

import { BACKEND_URL } from '@/shared/constants';

const axiosApi = axios.create({
  baseURL: BACKEND_URL,
});

export default axiosApi;
