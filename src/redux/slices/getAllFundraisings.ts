import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RequestStatus, Fundraising } from '@/shared/types';

const initialState: {
  requestStatus: RequestStatus;
  fundraisings?: Fundraising[];
  error?: string;
} = {
  requestStatus: 'default',
};

const slice = createSlice({
  name: 'getAllFundraisings',
  initialState,
  reducers: {
    setRequestStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.requestStatus = action.payload;
    },
    setFundraisings: (state, action: PayloadAction<Fundraising[]>) => {
      state.requestStatus = 'success';
      state.fundraisings = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.requestStatus = 'error';
      state.error = action.payload;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setRequestStatus, setFundraisings, setError } = slice.actions;
