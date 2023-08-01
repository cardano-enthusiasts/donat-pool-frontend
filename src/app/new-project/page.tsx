import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { Common } from '@/layouts';
import { ProjectCreation } from '@/shared/components';
import { type AppReduxState } from '@/shared/types';

const NewProject = () => {
  const router = useRouter();
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.setWalletStatus,
  );

  useEffect(() => {
    document.title = 'New project';
  }, []);

  return !isRequesting ? (
    <Common>
      <ProjectCreation
        onClose={() => {
          router.push('/my-projects');
        }}
      />
    </Common>
  ) : (
    <></>
  );
};

export default NewProject;
