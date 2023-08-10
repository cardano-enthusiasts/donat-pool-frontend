import { configureStore } from '@reduxjs/toolkit';

import { appInfo, donating, fundraisingCreation, fundsReceiving, protocolUpdating, connectWallet } from './slices';

export default configureStore({
  reducer: {
    appInfo: appInfo.reducer,
    donating: donating.reducer,
    fundraisingCreation: fundraisingCreation.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    connectWallet: connectWallet.reducer,
  },
});
