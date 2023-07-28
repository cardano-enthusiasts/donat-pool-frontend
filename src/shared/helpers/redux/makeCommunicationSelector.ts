import { type ICommunication } from 'redux-make-communication';

function makeCommunicationSelector<
  S,
  T extends {
    communication: Record<keyof T['communication'], ICommunication<any>>;
  },
>(selectState: (state: S) => T) {
  return <P = string>(
    state: S,
    comm: keyof T['communication'],
  ): ICommunication<P> => selectState(state).communication[comm];
}

export { makeCommunicationSelector };
