import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RequestStatus, type Fundraisings } from 'shared/types';

import { initialState } from './constants';

const slice = createSlice({
  name: 'allFundraisings',
  initialState,
  reducers: {
    updateAllFundraisings: (state, action: PayloadAction<Fundraisings>) => {
      state.value = action.payload;
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

export const { updateAllFundraisings, setError, setStatus } = slice.actions;
export const { reducer } = slice;
export default slice;
