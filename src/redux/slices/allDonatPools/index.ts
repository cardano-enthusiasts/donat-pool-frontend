import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RequestStatus, DonatPool } from '@/shared/types';

import { requestAllDonatPools } from './thunk';

const initialState: {
  status: RequestStatus;
  donatPools?: DonatPool[];
  error?: string;
} = {
  status: 'default',
};

const slice = createSlice({
  name: 'allDonatPools',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.status = 'requesting';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestAllDonatPools.pending.type, (state) => {
      state.status = 'requesting';
    });
    builder.addCase(requestAllDonatPools.fulfilled.type, (state, action: PayloadAction<DonatPool[]>) => {
      state.status = 'success';
      state.donatPools = action.payload;
    });
    builder.addCase(requestAllDonatPools.rejected.type, (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    });
  },
});

export default slice;
export const {
  reducer,
  actions: { setStatus },
} = slice;
