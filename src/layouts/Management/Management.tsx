import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ManagementParams, ManagerEditor } from 'shared/components';
import { useGetProtocolInfo, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const offchain = useOffchain();
  const getProtocolInfo = useGetProtocolInfo();
  const { config } = useSelector((state: AppReduxState) => state.protocol.data);
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.setWalletStatus
  );

  useEffect(() => {
    if (offchain) {
      getProtocolInfo();
    }
  }, [offchain]);

  useEffect(() => {
    document.title = 'Management';
  }, []);

  return !isRequesting ? (
    <Wrapper>
      <Title>Management contract</Title>
      <ManagerEditor config={config} />
      <Title>Current protocol parameters</Title>
      <ManagementParams config={config} />
    </Wrapper>
  ) : (
    <></>
  );
};
export default Management;
