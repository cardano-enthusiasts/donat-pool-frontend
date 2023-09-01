import { type FetchedDonatPool } from '@/shared/types';

function transformFetchedDonatPools(donatPools: FetchedDonatPool[]) {
  return donatPools.map(
    ({ title, creator, deadline, goal, raisedAmt, threadTokenCurrency, threadTokenName, isCompleted }) => ({
      title,
      creator,
      deadline: String(deadline.value),
      goal: String(goal.value),
      raisedAmt: String(raisedAmt.value),
      threadTokenCurrency,
      threadTokenName,
      completed: isCompleted,
    }),
  );
}

export default transformFetchedDonatPools;
