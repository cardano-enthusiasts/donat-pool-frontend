import { configureStore } from '@reduxjs/toolkit';

import allFundraisingsReducer from './slices/allFundraisings/allFundraisings';
import appInfoReducer from './slices/appInfo/appInfo';
import donatingReducer from './slices/donating/donating';
import fundraisingCreatingReducer from './slices/fundraisingCreating/fundraisingCreating';
import fundsReceivingReducer from './slices/fundsReceiving/fundsReceiving';
import protocolUpdatingReducer from './slices/protocolUpdating/protocolUpdating';
import userFundraisingsReducer from './slices/userFundraisings/userFundraisings';
import walletReducer from './slices/wallet/wallet';

export const store = configureStore({
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
