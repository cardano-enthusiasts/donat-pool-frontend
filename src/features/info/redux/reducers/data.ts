import type * as TS from '../../types';
import { initialState } from '../initialState';

function data(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: TS.ReduxState['data'] = initialState.data,
  action: TS.Action
): TS.ReduxState['data'] {
  switch (action.type) {
    case 'INFO:GET_USER_FUNDRAISINGS_SUCCESS':
      return {
        ...state,
        userFundraisings: action.payload,
      };
    case 'INFO:GET_ALL_FUNDRAISINGS_SUCCESS':
      return {
        ...state,
        allFundraisings: action.payload,
      };
  }
  return state;
}

export { data };
