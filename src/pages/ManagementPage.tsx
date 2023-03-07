import { useEffect, type FC } from 'react';

import { Base, Management } from 'layouts';

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
