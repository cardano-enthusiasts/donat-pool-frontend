import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus, DonatPool } from '@/shared/types';

const initialState: {
  status: RequestStatus;
  donatPools?: DonatPool[];
  error?: string;
} = {
  status: 'default',
};

const slice = createSlice({
  name: 'getUserRelatedFundraisings',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
    setDonatPools: (state, action: PayloadAction<DonatPool[]>) => {
      state.status = 'success';
      state.donatPools = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setStatus, setDonatPools, setError } = slice.actions;
