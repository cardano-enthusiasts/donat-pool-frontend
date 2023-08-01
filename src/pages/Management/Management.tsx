import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Common } from 'layouts';
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
    if (isManager === false) {
      navigate('/all-projects');
    }
  }, [isManager]);

  return !isRequesting ? (
    <Common>
      <Title>Management contract</Title>
      <Wrapper>
        <ManagerEditor config={config} />
        <ManagementParams config={config} />
      </Wrapper>
    </Common>
  ) : (
    <></>
  );
};
export default Management;
