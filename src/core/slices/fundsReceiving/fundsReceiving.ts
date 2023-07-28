import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { type Status } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'fundsReceiving',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const { setError, setStatus } = slice.actions;

export default slice.reducer;
