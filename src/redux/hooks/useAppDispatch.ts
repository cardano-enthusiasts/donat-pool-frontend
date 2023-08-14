import { useDispatch } from 'react-redux';

import store from '../store';

export default useDispatch as () => typeof store.dispatch;
