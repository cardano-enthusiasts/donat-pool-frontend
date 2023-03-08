import { type BackendProjects, type Projects } from 'shared/types';

const transformProjects = (projects: BackendProjects): Projects => {
  return projects.map(
    ({
      creator,
      deadline,
      description,
      goal,
      raisedAmt,
      threadTokenCurrency,
      threadTokenName,
    }) => {
      return {
        creator,
        deadline: Number(deadline.value),
        description,
        goal: Number(goal.value),
        raisedAmount: Number(raisedAmt.value),
        threadTokenCurrency,
        threadTokenName,
      };
    }
  );
};
export { transformProjects };
