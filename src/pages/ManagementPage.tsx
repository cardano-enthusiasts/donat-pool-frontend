import { useEffect, type FC } from 'react';

import Base from 'layouts/Base/Base';
import Management from 'layouts/Management/Management';

const ManagementPage: FC = () => {
  useEffect(() => {
    document.title = 'Management';
  }, []);

  return (
    <Base>
      <Management />
    </Base>
  );
};

export default ManagementPage;
