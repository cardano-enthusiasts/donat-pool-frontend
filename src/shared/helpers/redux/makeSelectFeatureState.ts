import { type AppReduxState } from 'shared/types';

function makeSelectFeatureState<
  T extends AppReduxState,
  K extends keyof AppReduxState
>(featureName: K): (state: T) => T[K] {
  return (state: T): T[K] => {
    if (!state[featureName]) {
      throw new Error(`Cannot find ${featureName} feature state!`);
    }

    return state[featureName];
  };
}

export { makeSelectFeatureState };
