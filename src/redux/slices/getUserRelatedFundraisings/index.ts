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
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      if (action.payload === 'requesting') {
        if (Object.hasOwn(state, 'donatPools')) {
          delete state.donatPools;
        }

        if (Object.hasOwn(state, 'error')) {
          delete state.error;
        }
      }

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

const {
  reducer,
  actions: { setStatus, setDonatPools, setError },
} = slice;

export { slice as default, reducer, setStatusRequesting, setDonatPools, setError };
