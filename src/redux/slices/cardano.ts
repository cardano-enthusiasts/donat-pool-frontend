import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WalletCardanoKey } from '@/shared/types';

const initialState: {
  initialized: boolean;
  activeWalletCardanoKey?: WalletCardanoKey;
} = {
  initialized: false,
};

const slice = createSlice({
  name: 'cardano',
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
    setActiveWalletCardanoKey: (state, action: PayloadAction<WalletCardanoKey>) => {
      state.activeWalletCardanoKey = action.payload;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setInitialized, setActiveWalletCardanoKey } = slice.actions;
