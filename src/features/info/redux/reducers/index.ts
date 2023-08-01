import { type ReduxState } from 'features/info/types';
import { combineReducers } from 'redux';


import { communication } from './communication';
import { data } from './data';

const reducer = combineReducers<ReduxState>({
  data,
  communication,
});

export { reducer };
