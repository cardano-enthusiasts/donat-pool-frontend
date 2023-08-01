import {
  makeCommunicationSelector,
  makeSelectFeatureState,
} from '@/shared/helpers/redux';

const selectFeatureState = makeSelectFeatureState('info');
const selectCommunication = makeCommunicationSelector(selectFeatureState);

export { selectCommunication };
