import { configureStore } from '@reduxjs/toolkit';

import {
  appInfo,
  donating,
  fundraisingCreation,
  fundsReceiving,
  protocolUpdating,
  connectedWallet,
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
    connectedWallet: connectedWallet.reducer,
    connectWallet: connectWallet.reducer,
    getAllFundraisings: getAllFundraisings.reducer,
    getUserRelatedFundraisings: getUserRelatedFundraisings.reducer,
  },
});

export default store;
