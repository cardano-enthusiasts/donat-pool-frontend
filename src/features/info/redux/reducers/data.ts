import type * as TS from '../../types';
import { initialState } from '../initialState';

function data(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: TS.ReduxState['data'] = initialState.data,
  action: TS.Action
): TS.ReduxState['data'] {
  switch (action.type) {
    case 'INFO:GET_CONFIG_SUCCESS':
      return {
        ...state,
        config: action.payload,
      };
    case 'INFO:GET_USER_PROJECTS_SUCCESS':
      return {
        ...state,
        userProjects: action.payload,
      };
    case 'INFO:GET_ALL_PROJECTS_SUCCESS':
      return {
        ...state,
        allProjects: action.payload,
      };
  }
  return state;
}

export { data };
