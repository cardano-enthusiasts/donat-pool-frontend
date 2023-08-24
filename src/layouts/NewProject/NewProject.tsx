import { useRouter } from 'next/navigation';

import { Project } from '@/layouts';
import { useAppSelector } from '@/redux/hooks';
import { CreationForm } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

const NewProject = () => {
  const router = useRouter();
  const protocol = useAppSelector((state) => state.appInfo.protocol);

  const handleClose = () => {
    router.push(ROUTES.userFundraisings);
  };

  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

  if (connectWalletStatus !== 'success') {
    return;
  }

  return (
    <Project onPreviousPageClick={handleClose} previousPageTitle="My projects" title="New project">
      {protocol && <CreationForm onClose={handleClose} protocol={protocol} />}
    </Project>
  );
};

export default NewProject;
