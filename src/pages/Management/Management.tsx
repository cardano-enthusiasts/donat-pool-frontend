import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ManagementParams, ManagerEditor } from 'shared/components';
import { type AppReduxState } from 'shared/types';

import { Title, Wrapper } from './Management.styled';

const Management = () => {
  const {
    protocol: {
      data: { config },
    },
    info: {
      communication: {
        setWalletStatus: { isRequesting },
      },
      data: {
        user: { isManager },
      },
    },
  } = useSelector((state: AppReduxState) => state);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Management';
  }, []);

  useEffect(() => {
    if (!isManager) {
      navigate('/');
    }
  }, [isManager]);

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
