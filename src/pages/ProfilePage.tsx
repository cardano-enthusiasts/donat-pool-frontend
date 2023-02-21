import { useEffect, type FC } from 'react';

import Base from 'layouts/Base/Base';
import Profile from 'layouts/Profile/Profile';

const ProfilePage: FC = () => {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <Base>
      <Profile />
    </Base>
  );
};

export default ProfilePage;
