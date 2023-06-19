import { Inner, PageHeader, PreviousPage, Wrapper } from './Project.styled';
import { type Props } from './types';

const Project = ({
  onPreviousPageClick,
  previousPageTitle,
  pageHeader,
  children,
}: Props) => {
  return (
    <Wrapper>
      <PreviousPage onClick={onPreviousPageClick}>
        {previousPageTitle}
      </PreviousPage>

      <Inner>
        <PageHeader>{pageHeader}</PageHeader>
        {children}
      </Inner>
    </Wrapper>
  );
};

export { Project };
