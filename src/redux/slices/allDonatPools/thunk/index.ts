import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import api from '@/shared/api';
import type { DonatPool } from '@/shared/types';

const requestAllDonatPools = createAsyncThunk('/allDonatPools', async function (_, { rejectWithValue }) {
  try {
    const response = await api.get<DonatPool[]>('fundraising-api/all-projects/');
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(JSON.stringify(error));
  }
});

export { requestAllDonatPools };
