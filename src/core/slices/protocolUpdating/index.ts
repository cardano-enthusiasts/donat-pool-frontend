import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RequestStatus } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'protocolUpdating',
  initialState,
  reducers: {
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

export const { setError, setStatus } = slice.actions;
export const { reducer } = slice;
export default slice;
