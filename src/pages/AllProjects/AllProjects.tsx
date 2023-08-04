import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Common } from 'layouts';
import { Button, ProjectCard } from 'shared/components';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraisings } from 'shared/types';
import { useAppSelector } from 'store/hooks';

import {
  CardsWrapper,
  CreateButton,
  Title,
  TitleAndButton,
} from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
  const navigate = useNavigate();
  const getAllFundraisings = useGetAllFundraisings();
  const {
    allFundraisings: { fundraisings },
    wallet: { mode: walletMode, status },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (offchain && walletMode === 'connected') {
      getAllFundraisings();
    }
  }, [offchain, walletMode]);

  useEffect(() => {
    document.title = 'All projects';
  }, []);

  const sortAndFilterFundraising = (fundraisings: Fundraisings) => {
    return [...fundraisings]
      .sort(
        (fundraising1, fundraising2) =>
          fundraising1.deadline - fundraising2.deadline,
      )
      .filter(({ isCompleted }) => !isCompleted);
  };

  return status !== 'requesting' ? (
    <Common>
      <TitleAndButton>
        <Title>All Donation pools</Title>
        <CreateButton>
          <Button
            primaryColor="red"
            secondaryColor="blue"
            fontColor="white"
            onClick={() => {
              navigate('/new-project');
            }}
          >
            Create a new project
          </Button>
        </CreateButton>
      </TitleAndButton>

      <CardsWrapper>
        {fundraisings ? (
          sortAndFilterFundraising(fundraisings).map((project) => {
            return (
              <ProjectCard
                data={project}
                key={project.threadTokenCurrency}
                linkSection="all-projects"
              />
            );
          })
        ) : (
          <></>
        )}
      </CardsWrapper>
    </Common>
  ) : (
    <></>
  );
};

export default AllProjects;
