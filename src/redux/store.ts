import { configureStore } from '@reduxjs/toolkit';

import {
  appInfo,
  donating,
  fundraisingCreation,
  fundsReceiving,
  protocolUpdating,
  cardano,
  connectWallet,
  getAllFundraisings,
  getUserRelatedFundraisings,
} from './slices';

const store = configureStore({
  reducer: {
    appInfo: appInfo.reducer,
    donating: donating.reducer,
    fundraisingCreation: fundraisingCreation.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    cardano: cardano.reducer,
    connectWallet: connectWallet.reducer,
    getAllFundraisings: getAllFundraisings.reducer,
    getUserRelatedFundraisings: getUserRelatedFundraisings.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
