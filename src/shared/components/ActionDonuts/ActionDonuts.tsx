import { Column1, Column2, Wrapper } from './ActionDonuts.styled';

const ActionDonuts = () => {
  const getColumns = () => {
    const arr = [0, 1, 2, 3, 4, 5];
    return arr.map((el) => (
      <>
        <Column1 />
        <Column2 />
      </>
    ));
  };

  return (
    <Wrapper>
      {getColumns()}
      <Column1 />
    </Wrapper>
  );
};

export { ActionDonuts };
