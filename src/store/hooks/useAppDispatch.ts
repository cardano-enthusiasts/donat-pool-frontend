import { useDispatch } from 'react-redux';

import store from '../';

export default useDispatch as () => typeof store.dispatch;
