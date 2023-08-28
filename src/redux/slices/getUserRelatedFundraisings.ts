import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { RequestStatus, Fundraising } from '@/shared/types';

const initialState: {
  status: RequestStatus;
  fundraisings?: Fundraising[];
  error?: string;
} = {
  status: 'default',
};

const slice = createSlice({
  name: 'getUserRelatedFundraisings',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
    setFundraisings: (state, action: PayloadAction<Fundraising[]>) => {
      state.status = 'success';
      state.fundraisings = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setStatus, setFundraisings, setError } = slice.actions;
