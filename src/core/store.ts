import { configureStore } from '@reduxjs/toolkit';

import {
  allFundraisingsReducer,
  userFundraisingsReducer,
  appInfoReducer,
  donatingReducer,
  fundraisingCreatingReducer,
  fundsReceivingReducer,
  protocolUpdatingReducer,
  walletReducer,
} from './';

const store = configureStore({
  reducer: {
    userFundraisings: userFundraisingsReducer,
    allFundraisings: allFundraisingsReducer,
    appInfo: appInfoReducer,
    donating: donatingReducer,
    fundraisingsCreating: fundraisingCreatingReducer,
    fundsReceiving: fundsReceivingReducer,
    protocolUpdating: protocolUpdatingReducer,
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
