import { useSelector, type TypedUseSelectorHook } from 'react-redux';

import store from '../store';

export default useSelector as TypedUseSelectorHook<ReturnType<typeof store.getState>>;
