import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type WalletMode } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletMode: (state, action: PayloadAction<WalletMode>) => {
      state.mode = action.payload;
      state.status = 'success';
    },
    reset: (state) => {
      state.mode = 'default';
      state.status = 'default';
    },
    setRequesting: (state) => {
      state.mode = 'default';
      state.status = 'requesting';
    },
  },
});

export const { setWalletMode, reset, setRequesting } = slice.actions;
export const { reducer } = slice;
export default slice;
