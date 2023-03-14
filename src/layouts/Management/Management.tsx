import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ManagementParams, ManagerEditor } from 'shared/components';
import { useGetProtocolInfo, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const offchain = useOffchain();
  const getProtocolInfo = useGetProtocolInfo();
  const { config } = useSelector((state: AppReduxState) => state.info.data);

  useEffect(() => {
    if (offchain) {
      getProtocolInfo();
    }
  }, [offchain]);

  return (
    <Wrapper>
      <Title>Management contract</Title>
      <ManagerEditor config={config} />
      <Title>Current protocol parameters</Title>
      <ManagementParams config={config} />
    </Wrapper>
  );
};
export default Management;
