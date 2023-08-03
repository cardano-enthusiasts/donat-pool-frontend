import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RequestStatus, type WalletMode } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateWalletMode: (state, action: PayloadAction<WalletMode>) => {
      state.mode = action.payload;
      state.status = 'success';
    },
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { updateWalletMode, setStatus } = slice.actions;
export const { reducer } = slice;
export default slice;
