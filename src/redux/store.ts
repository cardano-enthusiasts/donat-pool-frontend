import { configureStore } from '@reduxjs/toolkit';

import api from '@/services/api';

import {
  appInfo,
  createFundraising,
  donating,
  fundsReceiving,
  protocolUpdating,
  connectWallet,
  getUserRelatedFundraisings,
} from './slices';

const store = configureStore({
  reducer: {
    appInfo: appInfo.reducer,
    getUserRelatedFundraisings: getUserRelatedFundraisings.reducer,
    donating: donating.reducer,
    createFundraising: createFundraising.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    connectWallet: connectWallet.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
