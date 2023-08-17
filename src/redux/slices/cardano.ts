import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/shared/types';

interface Wallet {
  cardanoKey: 'nami' | 'flint' | 'eternl';
  name: 'Nami' | 'Flint' | 'Eternl';
  installed: boolean;
  connected: boolean;
}

const initialState: {
  initialized: boolean;
  wallets?: Wallet[];
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
        wallet.connected = true;
      }
    },
  },
});

const selectConnectedWallet = (state: RootState) => {
  return state.cardano.wallets?.find(({ connected }) => Boolean(connected));
};

export { slice as default, selectConnectedWallet };
export const { reducer } = slice;
export const { setInitialized, setWallet, setWalletConnectedByName } = slice.actions;
