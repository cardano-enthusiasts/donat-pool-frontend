import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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
  },
});

export default slice;
export const { reducer } = slice;
export const { setInitialized, setWallet } = slice.actions;
