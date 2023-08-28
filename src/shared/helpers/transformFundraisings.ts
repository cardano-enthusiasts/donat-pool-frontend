import type { FetchedFundraising } from '@/shared/types';

function transformFundraisings(fundraisings: FetchedFundraising[]) {
  return fundraisings.map(
    ({ creator, deadline, goal, isCompleted, raisedAmt, threadTokenCurrency, threadTokenName, title }) => ({
      creator,
      deadline: String(deadline.value),
      goal: String(goal.value),
      completed: isCompleted,
      raisedAmt: String(raisedAmt.value),
      threadTokenCurrency,
      threadTokenName,
      title,
    }),
  );
}

export default transformFundraisings;
