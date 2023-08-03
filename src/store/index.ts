import { configureStore } from '@reduxjs/toolkit';

import {
  allFundraisings,
  userFundraisings,
  appInfo,
  donating,
  fundraisingCreation,
  fundsReceiving,
  protocolUpdating,
  wallet,
} from './slices';

const store = configureStore({
  reducer: {
    userFundraisings: userFundraisings.reducer,
    allFundraisings: allFundraisings.reducer,
    appInfo: appInfo.reducer,
    donating: donating.reducer,
    fundraisingCreation: fundraisingCreation.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    wallet: wallet.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
