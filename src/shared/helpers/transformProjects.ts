import { type BackendProjects, type Fundraisings } from '@/shared/types';

const transformProjects = (projects: BackendProjects): Fundraisings => {
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
