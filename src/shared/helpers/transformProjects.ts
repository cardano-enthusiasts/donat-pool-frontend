import { type BackendProjects, type Fundraisings } from '@/shared/types';

const transformProjects = (projects: BackendProjects): Fundraisings => {
  return projects.map(
    ({
      creator,
      deadline,
      description,
      goal,
      raisedAmt,
      threadTokenCurrency,
      threadTokenName,
      path,
      isCompleted,
    }) => {
      return {
        creator,
        deadline: Number(deadline.value),
        description,
        goal: Number(goal.value),
        raisedAmount: Number(raisedAmt.value),
        threadTokenCurrency,
        threadTokenName,
        path,
        isCompleted,
      };
    },
  );
};
export { transformProjects };
