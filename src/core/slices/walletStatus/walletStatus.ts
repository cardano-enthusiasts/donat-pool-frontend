import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { type Status, type WalletStatus } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'walletStatus',
  initialState,
  reducers: {
    updateWalletStatus: (state, action: PayloadAction<WalletStatus>) => {
      state.value = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const { updateWalletStatus, setStatus } = slice.actions;

export default slice.reducer;
