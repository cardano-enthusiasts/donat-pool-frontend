import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RequestStatus } from '@/shared/types';

const initialState: {
  status: RequestStatus;
  walletStatus:
    | 'default'
    | 'connected'
    | 'declined'
    | 'notAvailable'
    | 'missingCollateral';
  error?: string;
} = {
  status: 'default',
  walletStatus: 'default',
};

const slice = createSlice({
  name: 'connectWallet',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
    setWalletStatus: (
      state,
      action: PayloadAction<(typeof initialState)['walletStatus']>,
    ) => {
      state.walletStatus = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    },
    resetState: () => initialState,
  },
});

export default slice;
export const { reducer } = slice;
export const { setStatus, setWalletStatus, setError, resetState } =
  slice.actions;
