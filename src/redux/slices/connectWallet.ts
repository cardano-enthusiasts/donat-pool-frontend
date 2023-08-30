import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus } from '@/shared/types';

const initialState: {
  requestStatus: RequestStatus;
  walletStatus: 'default' | 'connected' | 'declined' | 'notAvailable' | 'missingCollateral';
  error?: string;
} = {
  requestStatus: 'default',
  walletStatus: 'default',
};

const slice = createSlice({
  name: 'connectWallet',
  initialState,
  reducers: {
    setRequestStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.requestStatus = action.payload;
    },
    setWalletStatus: (state, action: PayloadAction<(typeof initialState)['walletStatus']>) => {
      state.walletStatus = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.requestStatus = 'error';
      state.error = action.payload;
    },
  },
});

export default slice;
export const {
  reducer,
  actions: { setRequestStatus, setWalletStatus, setError },
} = slice;
