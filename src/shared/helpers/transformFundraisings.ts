import { FetchedFundraising, Fundraising } from '@/shared/types';

const transformFundraisings = (fundraisings: FetchedFundraising[]): Fundraising[] => {
  return fundraisings.map(
    ({ creator, deadline, goal, isCompleted, raisedAmt, threadTokenCurrency, threadTokenName, title }) => ({
      creator,
      deadline: String(deadline.value),
      goal: String(goal.value),
      isCompleted,
      raisedAmt: String(raisedAmt.value),
      threadTokenCurrency,
      threadTokenName,
      title,
    }),
  );
};

export default transformFundraisings;
