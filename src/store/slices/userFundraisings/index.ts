import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type Fundraisings } from '@/shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'userFundraisings',
  initialState,
  reducers: {
    setUserFundraisings: (state, action: PayloadAction<Fundraisings>) => {
      state.fundraisings = action.payload;
      state.error = initialState.error;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.fundraisings = initialState.fundraisings;
      state.status = 'error';
    },
    setRequesting: (state) => {
      state.error = initialState.error;
      state.status = 'requesting';
    },
  },
});

export const { setUserFundraisings, setError, setRequesting } = slice.actions;
export const { reducer } = slice;
export default slice;
