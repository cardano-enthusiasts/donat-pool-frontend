import { combineReducers } from 'redux';

import { communication } from './communication';
import { data } from './data';
import { type ReduxState } from '../../types';

const reducer = combineReducers<ReduxState>({
  data,
  communication,
});

export { reducer };
