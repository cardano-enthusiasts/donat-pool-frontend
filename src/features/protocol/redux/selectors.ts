import {
  makeCommunicationSelector,
  makeSelectFeatureState,
} from '@/shared/helpers/redux';

const selectFeatureState = makeSelectFeatureState('protocol');
const selectCommunication = makeCommunicationSelector(selectFeatureState);

export { selectCommunication };
