import { type Fundraisings } from 'shared/types';

import type * as TS from '../../types';
import { initialState } from '../initialState';

const addStatus = (fundraisings: Omit<Fundraisings, 'status'>): Fundraisings =>
  fundraisings.map((fundraising) => {
    return {
      ...fundraising,
      status:
        fundraising.deadline - new Date().getTime() > 0
          ? 'active'
          : 'completed',
    };
  });

function data(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: TS.ReduxState['data'] = initialState.data,
  action: TS.Action
): TS.ReduxState['data'] {
  switch (action.type) {
    case 'INFO:GET_USER_FUNDRAISINGS_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          fundraisings: addStatus(action.payload),
        },
      };
    case 'INFO:GET_USER_INFO_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          address: action.payload.address,
          isManager: action.payload.isManager,
        },
      };

    case 'INFO:GET_ALL_FUNDRAISINGS_SUCCESS':
      return {
        ...state,
        allFundraisings: addStatus(action.payload),
      };
    case 'INFO:SET_WALLET_STATUS_SUCCESS':
      return {
        ...state,
        walletStatus: action.payload,
      };
  }
  return state;
}

export { data };
