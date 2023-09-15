import { configureStore } from '@reduxjs/toolkit';

import {
  appInfo,
  backEnd,
  connectWallet,
  createFundraising,
  donating,
  fundsReceiving,
  getUserRelatedFundraisings,
  protocolUpdating,
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
    [backEnd.reducerPath]: backEnd.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backEnd.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
