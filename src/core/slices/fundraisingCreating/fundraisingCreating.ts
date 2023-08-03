import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RequestStatus } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'fundraisingCreating',
  initialState,
  reducers: {
    updateCreatedPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
      if (action.payload === 'error') {
        state.error = null;
      }
    },
  },
});

export const { setError, setStatus, updateCreatedPath } = slice.actions;

export default slice.reducer;
