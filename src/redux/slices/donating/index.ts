import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './constants';

const slice = createSlice({
  name: 'donating',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setSuccess: (state) => {
      state.error = initialState.error;
      state.status = 'success';
    },
    setRequesting: (state) => {
      state.status = 'requesting';
      state.error = initialState.error;
    },
    reset: (state) => {
      state.status = 'default';
      state.error = initialState.error;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setError, setSuccess, setRequesting, reset } = slice.actions;
