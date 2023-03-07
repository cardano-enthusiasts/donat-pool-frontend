import { Item, Wrapper, Title, Items } from './ProjectCard.styled';
import { type Props } from './types';

const ProjectCard = ({ deadline, title, goal, raisedAmount }: Props) => {
  const getDate = () => {
    return new Date(deadline).toString();
  };
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Items>
        <Item>deadline: </Item>
        <Item>{getDate()}</Item>
        <Item>goal: </Item>
        <Item>{goal / 1000000} ADA</Item>
        <Item>raised: </Item>
        <Item>{raisedAmount}</Item>
      </Items>
    </Wrapper>
  );
};

export default ProjectCard;
