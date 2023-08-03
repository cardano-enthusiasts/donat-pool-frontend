import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RequestStatus, type UserInfo, type Config } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setProtocol: (state, action: PayloadAction<Config>) => {
      state.protocol = action.payload;
      state.status = 'success';
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      state.status = 'success';
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
      if (action.payload === 'error') {
        state.error = null;
      }
    },
  },
});

export const { setProtocol, setUserInfo, setError, setStatus } = slice.actions;
export const { reducer } = slice;
export default slice;
