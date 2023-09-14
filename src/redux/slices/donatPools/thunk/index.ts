import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import api from '@/shared/api';
import type { DonatPool } from '@/shared/types';

const requestDonatPools = createAsyncThunk('/donatPools', async function (_, { rejectWithValue }) {
  try {
    const response = await api.get<DonatPool[]>('fundraising-api/all-projects/');
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    console.error(`allDonatPools: ${JSON.stringify(error)}`);
    return rejectWithValue('common error');
  }
});

export { requestDonatPools };
