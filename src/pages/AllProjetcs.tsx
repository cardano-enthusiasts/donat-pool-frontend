import { useEffect, type FC } from 'react';

import AllProjects from 'layouts/AllProjetcs/AllProjetcs';
import Base from 'layouts/Base/Base';

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

export default AllProjectsPage;
