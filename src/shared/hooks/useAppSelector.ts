import { useSelector, type TypedUseSelectorHook } from 'react-redux';

import store from '@/redux/store';

export default useSelector as TypedUseSelectorHook<ReturnType<typeof store.getState>>;
