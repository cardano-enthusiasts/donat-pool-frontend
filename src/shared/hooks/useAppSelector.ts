import { useSelector, type TypedUseSelectorHook } from 'react-redux';

import store from '@/redux/store';

const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default useAppSelector;
