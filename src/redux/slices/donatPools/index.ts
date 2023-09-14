import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RequestStatus, DonatPool } from '@/shared/types';

import { requestDonatPools } from './thunk';

const initialState: {
  status: RequestStatus;
  donatPools?: DonatPool[];
  error?: string;
} = {
  status: 'default',
};

const slice = createSlice({
  name: 'donatPools',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestDonatPools.pending.type, (state) => {
      state.status = 'requesting';
    });
    builder.addCase(requestDonatPools.fulfilled.type, (state, action: PayloadAction<DonatPool[]>) => {
      state.status = 'success';
      state.donatPools = action.payload;
    });
    builder.addCase(requestDonatPools.rejected.type, (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    });
  },
});

export default slice;
export const { reducer } = slice;
