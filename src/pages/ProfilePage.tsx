import { type FC } from 'react';

import Base from 'layouts/Base/Base';
import Profile from 'layouts/Profile/Profile';

const ProfilePage: FC = () => {
  return (
    <Base
      title="Management"
      description="description"
      keywords="keywords"
      activeHeaderItem="management"
    >
      <Profile />
    </Base>
  );
};

export default ProfilePage;
