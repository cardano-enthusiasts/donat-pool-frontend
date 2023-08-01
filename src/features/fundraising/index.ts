import { type FeatureEntry } from '@/shared/types';

import { actionCreators, selectors, reducer, rootSaga } from './redux';
import * as types from './types';

const entry: FeatureEntry = {
  actionCreators,
  selectors,
  reducer,
  saga: rootSaga,
};

export { entry, types };
