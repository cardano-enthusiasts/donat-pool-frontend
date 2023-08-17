import { useDispatch } from 'react-redux';

import store from '@/redux/store';

const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default useAppDispatch;
