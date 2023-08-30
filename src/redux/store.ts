import { configureStore } from '@reduxjs/toolkit';

import {
  appInfo,
  createFundraising,
  donating,
  fundsReceiving,
  protocolUpdating,
  cardano,
  connectWallet,
  getAllFundraisings,
  getUserRelatedFundraisings,
} from './slices';

const store = configureStore({
  reducer: {
    cardano: cardano.reducer,
    appInfo: appInfo.reducer,
    getAllFundraisings: getAllFundraisings.reducer,
    getUserRelatedFundraisings: getUserRelatedFundraisings.reducer,
    donating: donating.reducer,
    createFundraising: createFundraising.reducer,
    fundsReceiving: fundsReceiving.reducer,
    protocolUpdating: protocolUpdating.reducer,
    connectWallet: connectWallet.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
