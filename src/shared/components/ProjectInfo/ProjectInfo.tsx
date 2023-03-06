import { Item, Items, Title, Wrapper } from './ProjectInfo.styled';
import { type Props } from './types';

const ProjectInfo = ({
  creator,
  deadline,
  description,
  goal,
  raisedAmount,
}: Props) => {
  const getDate = () => {
    return new Date(deadline).toString();
  };
  return (
    <Wrapper>
      <Title>{description}</Title>
      <Items>
        <Item>deadline: </Item>
        <Item>{getDate()}</Item>
        <Item>goal: </Item>
        <Item>{goal}</Item>
        <Item>raised: </Item>
        <Item>{raisedAmount}</Item>
      </Items>
    </Wrapper>
  );
};
export default ProjectInfo;
