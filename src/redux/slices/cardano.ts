import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { WalletCardanoKey } from '@/shared/types';

const initialState: {
  isInitialized: boolean;
  activeWalletCardanoKey?: WalletCardanoKey;
} = {
  isInitialized: false,
};

const slice = createSlice({
  name: 'cardano',
  initialState,
  reducers: {
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    setActiveWalletCardanoKey: (state, action: PayloadAction<WalletCardanoKey>) => {
      state.activeWalletCardanoKey = action.payload;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setIsInitialized, setActiveWalletCardanoKey } = slice.actions;
