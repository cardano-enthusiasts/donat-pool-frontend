import { useWindowSize } from 'shared/helpers/hooks';

import {
  Inner,
  PageHeader,
  PreviousPage,
  Title,
  Wrapper,
} from './Project.styled';
import { type Props } from './types';

const Project = ({
  onPreviousPageClick,
  previousPageTitle,
  title,
  children,
}: Props) => {
  const { width } = useWindowSize();
  return (
    <Wrapper>
      <Inner>
        <PageHeader>
          <PreviousPage onClick={onPreviousPageClick}>
            {width > 1200 ? previousPageTitle : ''}
          </PreviousPage>
          <Title>{title}</Title>
        </PageHeader>
        {children}
      </Inner>
    </Wrapper>
  );
};

export { Project };
