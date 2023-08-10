import { useSelector, type TypedUseSelectorHook } from 'react-redux';

import store from '../';

export default useSelector as TypedUseSelectorHook<ReturnType<typeof store.getState>>;
