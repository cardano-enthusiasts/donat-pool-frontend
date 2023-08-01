import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Common } from 'layouts';
import { MyProjects } from 'shared/components';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

const PrivateProjects = () => {
  const navigate = useNavigate();
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const {
    communication: {
      setWalletStatus: { isRequesting },
    },
    data: { walletStatus },
  } = useSelector((state: AppReduxState) => state.info);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  useEffect(() => {
    if (offchain && walletStatus === 'connected') {
      getUserFundraisings();
    }
  }, [offchain, walletStatus]);

  return !isRequesting ? (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          navigate('/new-project');
        }}
      />
    </Common>
  ) : (
    <></>
  );
};

export default PrivateProjects;
