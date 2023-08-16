import { useDispatch } from 'react-redux';

import store from '@/redux/store';

export default useDispatch as () => typeof store.dispatch;
