import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  name?: 'Nami' | 'Flint' | 'Eternl';
} = {};

const slice = createSlice({
  name: 'connectedWallet',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<NonNullable<(typeof initialState)['name']>>) => {
      state.name = action.payload;
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setName } = slice.actions;
