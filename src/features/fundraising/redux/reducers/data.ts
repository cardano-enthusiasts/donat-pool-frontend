import type * as TS from '../../types';
import { initialState } from '../initialState';

function data(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: TS.ReduxState['data'] = initialState.data,
  action: TS.Action,
): TS.ReduxState['data'] {
  return state;
}

export { data };
