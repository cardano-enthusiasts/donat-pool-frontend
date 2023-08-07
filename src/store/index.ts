import { configureStore } from '@reduxjs/toolkit';

import {
  appInfo,
  donating,
  fundraisingCreation,
  fundsReceiving,
  protocolUpdating,
  connectWallet,
} from './slices';

const store = configureStore({
  reducer: {
    appInfo: appInfo.reducer,
    donating: donating.reducer,
    fundraisingCreation: fundraisingCreation.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    connectWallet: connectWallet.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
