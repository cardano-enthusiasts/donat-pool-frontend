import {
  makeCommunicationSelector,
  makeSelectFeatureState,
} from '@/shared/helpers/redux';

const selectFeatureState = makeSelectFeatureState('fundraising');
const selectCommunication = makeCommunicationSelector(selectFeatureState);

export { selectCommunication };
