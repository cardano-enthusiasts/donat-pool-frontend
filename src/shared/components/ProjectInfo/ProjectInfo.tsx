import { Item, Title, Wrapper } from './ProjectInfo.styled';
import { type Props } from './types';

const ProjectInfo = ({ title, startDate, endDate, goal, raised }: Props) => {
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
