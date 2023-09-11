import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '@/shared/api';
import type { DonatPool } from '@/shared/types';

async function getAllDonatPools() {
  try {
    const response = await api.get<DonatPool[]>('fundraising-api/all-projects/');
    return response.data;
  } catch (error) {
    return error;
  }
}

const requestAllDonatPools = createAsyncThunk('/allDonatPools', getAllDonatPools);

export { requestAllDonatPools };
