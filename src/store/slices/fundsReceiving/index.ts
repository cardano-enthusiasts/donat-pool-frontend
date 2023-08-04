import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'fundsReceiving',
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.status = 'success';
      state.error = initialState.error;
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

export const { setError, setRequesting, setSuccess, reset } = slice.actions;
export const { reducer } = slice;
export default slice;
