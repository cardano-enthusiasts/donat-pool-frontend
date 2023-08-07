import { type Fundraising } from '@/shared/types';
import { type BackendProjects } from '@/shared/types/backend';

const transformProjects = (projects: BackendProjects): Fundraising[] => {
  return projects.map(
    ({
      creator,
      deadline,
      title,
      goal,
      raisedAmt,
      threadTokenCurrency,
      threadTokenName,
      isCompleted,
    }) => {
      return {
        creator,
        deadline: Number(deadline.value),
        title,
        goal: Number(goal.value),
        raisedAmount: Number(raisedAmt.value),
        threadTokenCurrency,
        threadTokenName,
        isCompleted,
      };
    },
  );
};
export { transformProjects };
