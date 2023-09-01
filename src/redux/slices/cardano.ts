import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type WalletCardanoKey } from '@/shared/types';

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
export const {
  reducer,
  actions: { setInitialized, setActiveWalletCardanoKey },
} = slice;
