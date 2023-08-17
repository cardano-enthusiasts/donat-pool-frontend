import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Provider {
  name: 'nami' | 'flint' | 'eternl';
  installed?: boolean;
  icon?: string;
  connected?: boolean;
}

const initialState: {
  initialized: boolean;
  providers: Provider[];
} = {
  initialized: false,
  providers: [{ name: 'nami' }, { name: 'flint' }, { name: 'eternl' }],
};

const slice = createSlice({
  name: 'cardano',
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
    setProviderInstalledByName: (
      state,
      action: PayloadAction<{ name: Provider['name']; value: NonNullable<Provider['installed']> }>,
    ) => {
      const provider = state.providers.find(({ name }) => name === action.payload.name);

      if (provider) {
        provider.installed = action.payload.value;
      }
    },
    setProviderIconByName: (
      state,
      action: PayloadAction<{ name: Provider['name']; value: NonNullable<Provider['icon']> }>,
    ) => {
      const provider = state.providers.find(({ name }) => name === action.payload.name);

      if (provider) {
        provider.icon = action.payload.value;
      }
    },
    setProviderConnectedByName: (
      state,
      action: PayloadAction<{ name: Provider['name']; value: NonNullable<Provider['connected']> }>,
    ) => {
      const provider = state.providers.find(({ name }) => name === action.payload.name);

      if (provider) {
        provider.connected = action.payload.value;
      }
    },
  },
});

export default slice;
export const { reducer } = slice;
export const { setInitialized, setProviderInstalledByName, setProviderIconByName, setProviderConnectedByName } =
  slice.actions;
