import { useEffect, type FC } from 'react';

import { Base, Profile } from 'layouts';

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

export { ProfilePage };
