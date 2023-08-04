import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type Fundraisings } from 'shared/types';

import { initialState } from './constants';

const slice = createSlice({
  name: 'allFundraisings',
  initialState,
  reducers: {
    setAllFundraisings: (state, action: PayloadAction<Fundraisings>) => {
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
      state.status = 'requesting';
      state.error = initialState.error;
      state.fundraisings = initialState.fundraisings;
    },
  },
});

export const { setAllFundraisings, setError, setRequesting } = slice.actions;
export const { reducer } = slice;
export default slice;
