import { Item, Title, Wrapper } from './ProjectInfo.styled';

const ProjectInfo = () => {
  const { title, startDate, endDate, goal, raised } = {
    title: 'Cats',
    startDate: '12.02.2001',
    endDate: '12.02.2001',
    goal: '900 ADA',
    raised: '90 ADA',
  };
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Item>start date: {startDate}</Item>
      <Item>end date: {endDate}</Item>
      <Item>goal: {goal}</Item>
      <Item>raised: {raised}</Item>
    </Wrapper>
  );
};
export default ProjectInfo;
