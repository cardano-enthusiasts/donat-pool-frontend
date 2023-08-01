import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { type Status, type Fundraisings } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'userFundraisings',
  initialState,
  reducers: {
    updateUserFundraisings: (state, action: PayloadAction<Fundraisings>) => {
      state.value = action.payload;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const { updateUserFundraisings, setError, setStatus } = slice.actions;

export default slice.reducer;
