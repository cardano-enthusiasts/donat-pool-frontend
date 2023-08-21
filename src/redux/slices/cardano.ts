import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootState, Wallet } from '@/shared/types';

const initialState: {
  isInitialized: boolean;
  wallets?: Wallet[];
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
    setWallet: (state, action: PayloadAction<Wallet>) => {
      if (Object.hasOwn(state, 'wallets')) {
        (state.wallets as any).push(action.payload);
      } else {
        state.wallets = [action.payload];
      }
    },
    setWalletConnectedByName: (state, action: PayloadAction<Wallet['name']>) => {
      const wallet = state.wallets?.find(({ name }) => name === action.payload);

      if (wallet) {
        wallet.isConnected = true;
      }
    },
  },
});

const selectConnectedWallet = (state: RootState) => {
  return state.cardano.wallets?.find(({ isConnected }) => Boolean(isConnected));
};

export { slice as default, selectConnectedWallet };
export const { reducer } = slice;
export const { setIsInitialized, setWallet, setWalletConnectedByName } = slice.actions;
