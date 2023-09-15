import { configureStore } from '@reduxjs/toolkit';

import {
  appInfo,
  backEndApi,
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
    [backEndApi.reducerPath]: backEndApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backEndApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
