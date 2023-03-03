import { combineReducers } from 'redux';

import { type ReduxState } from 'features/info/types';

import { communication } from './communication';
import { data } from './data';

const reducer = combineReducers<ReduxState>({
  data,
  communication,
});

export { reducer };
