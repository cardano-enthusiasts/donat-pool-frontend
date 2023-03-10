import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getConfig } from 'features/info/redux/actionCreators';
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
      getConfig();
    }
  }, [offchain]);

  return (
    <Wrapper>
      <Title>Management contract</Title>
      <ManagerEditor
        onUpdatedSuccess={getProtocolInfo}
        onUpdatedError={getProtocolInfo}
        config={config}
      />
      <Title>Current protocol parameters</Title>
      <ManagementParams config={config} />
    </Wrapper>
  );
};
export default Management;
