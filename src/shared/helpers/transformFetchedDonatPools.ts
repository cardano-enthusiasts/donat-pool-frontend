import type { DonatPool, FetchedDonatPool } from '@/shared/types';

function transformFetchedDonatPools(donatPools: FetchedDonatPool[]): DonatPool[] {
  return donatPools.map(({ title, deadline, goal, raisedAmt, threadTokenCurrency, threadTokenName, isCompleted }) => ({
    title,
    deadline,
    goal,
    raisedAmt,
    threadTokenCurrency,
    threadTokenName,
    completed: isCompleted,
  }));
}

export default transformFetchedDonatPools;
