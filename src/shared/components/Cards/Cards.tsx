import { Wrapper } from './Cards.styled';
import Card from '../Card/Card';

const Cards = () => {
  const info = [
    {
      title: 'Lorem, ipsum dolor.',
      description: 'Sunt anim ipsum et pariatur quis mollit deserunt.',
      id: 0,
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim tempora natus porro vitae?',
      id: 1,
    },
    {
      title: 'Lorem, ipsum.',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      id: 2,
    },
    {
      title: 'Lorem, ipsum dolor.',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, quas quaerat.',
      id: 3,
    },
  ];
  return (
    <Wrapper>
      {info.map(({ title, description, id }) => (
        <Card title={title} description={description} key={id} />
      ))}
    </Wrapper>
  );
};

export default Cards;
