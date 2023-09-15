import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RequestStatus, DonatPool } from '@/shared/types';

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
    setStatusRequesting: (state) => {
      state.status = 'requesting';
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

const {
  reducer,
  actions: { setStatusRequesting, setDonatPools, setError },
} = slice;

export { slice as default, reducer, setStatusRequesting, setDonatPools, setError };
