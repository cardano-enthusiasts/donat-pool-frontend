import { type FC } from 'react';

import Base from 'layouts/Base/Base';
import Management from 'layouts/Management/Management';

const ManagementPage: FC = () => {
  return (
    <Base
      title="Management"
      description="description"
      keywords="keywords"
      activeHeaderItem="management"
    >
      <Management />
    </Base>
  );
};

export default ManagementPage;
