import { useEffect, type FC } from 'react';

import { AllProjects, Base } from 'layouts';

const AllProjectsPage: FC = () => {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  return (
    <Base>
      <AllProjects />
    </Base>
  );
};

export { AllProjectsPage };
