import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './constants';

const slice = createSlice({
  name: 'protocolUpdating',
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.error = initialState.error;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setRequesting: (state) => {
      state.error = initialState.error;
      state.status = 'requesting';
    },
    reset: (state) => {
      state.error = initialState.error;
      state.status = 'default';
    },
  },
});

export default slice;
export const {
  reducer,
  actions: { setError, setSuccess, setRequesting, reset },
} = slice;
