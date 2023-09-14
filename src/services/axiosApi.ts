import axios from 'axios';

import { BACK_END_URL } from '@/shared/constants';

const axiosApi = axios.create({
  baseURL: BACK_END_URL,
});

export default axiosApi;
