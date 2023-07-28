import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { type WalletStatus } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'walletStatus',
  initialState,
  reducers: {
    updateWalletStatus: (state, action: PayloadAction<WalletStatus>) => {
      state.value = action.payload;
    },
  },
});

export const { updateWalletStatus } = slice.actions;

export default slice.reducer;
