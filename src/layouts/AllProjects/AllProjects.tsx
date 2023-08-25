'use client';

import { ProjectCard } from '@/shared/components';
import { useFundraisings } from '@/shared/hooks';

const AllProjects = () => {
  const {
    areBeingFetched: fundraisingsAreBeingFetched,
    fundraisings,
    error: fetchFundraisingsError,
  } = useFundraisings();

  return (
    <>
      {fundraisingsAreBeingFetched && <div>fundraisings are being fetched</div>}
      {fundraisings && (
        <div className="grid grid-cols-projects gap-10 max-sm:grid-cols-1 max-sm:gap-8">
          {fundraisings
            .filter(({ isCompleted }) => !isCompleted)
            .sort((fundraising1, fundraising2) => Number(fundraising1.deadline) - Number(fundraising2.deadline))
            .map((fundraising) => (
              <ProjectCard key={fundraising.threadTokenCurrency} data={fundraising} linkSection="all-projects" />
            ))}
        </div>
      )}
      {fetchFundraisingsError && <div className="text-error">An error happened while fetching fundraisings</div>}
    </>
  );
};

export default AllProjects;
