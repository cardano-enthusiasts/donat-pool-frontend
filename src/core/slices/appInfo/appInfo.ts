import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { type Status, type UserInfo, type Config } from 'shared/types';

import { initialState } from './constants';

export const slice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    updateProtocol: (state, action: PayloadAction<Config>) => {
      state.protocol = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.status = 'error';
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const { updateProtocol, updateUserInfo, setError, setStatus } =
  slice.actions;

export default slice.reducer;
