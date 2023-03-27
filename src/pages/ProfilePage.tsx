import { useEffect, type FC } from 'react';

import { Base, Profile } from 'layouts';

const ProfilePage: FC = () => {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <Base activeHeaderItem="profile">
      <Profile />
    </Base>
  );
};

export { ProfilePage };