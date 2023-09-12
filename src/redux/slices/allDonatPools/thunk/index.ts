import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '@/shared/api';
import type { DonatPool } from '@/shared/types';

const requestAllDonatPools = createAsyncThunk('/allDonatPools', async function (_, { rejectWithValue }) {
  try {
    const response = await api.get<DonatPool[]>('fundraising-api/all-projects/');
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export { requestAllDonatPools };
