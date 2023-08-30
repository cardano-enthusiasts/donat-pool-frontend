import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './constants';

const slice = createSlice({
  name: 'createFundraising',
  initialState,
  reducers: {
    setCreatedPath: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
      state.error = initialState.error;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.path = initialState.path;
      state.status = 'error';
    },
    setRequesting: (state) => {
      state.status = 'requesting';
    },
    reset: (state) => {
      state.error = initialState.error;
      state.path = initialState.path;
      state.status = 'default';
    },
  },
});

export default slice;
export const {
  reducer,
  actions: { setError, setRequesting, setCreatedPath, reset },
} = slice;