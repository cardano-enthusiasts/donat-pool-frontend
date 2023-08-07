import { configureStore } from '@reduxjs/toolkit';

import {
  userFundraisings,
  appInfo,
  donating,
  fundraisingCreation,
  fundsReceiving,
  protocolUpdating,
  connectWallet,
  getAllFundraisings,
} from './slices';

const store = configureStore({
  reducer: {
    userFundraisings: userFundraisings.reducer,
    appInfo: appInfo.reducer,
    donating: donating.reducer,
    fundraisingCreation: fundraisingCreation.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    connectWallet: connectWallet.reducer,
    getAllFundraisings: getAllFundraisings.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
