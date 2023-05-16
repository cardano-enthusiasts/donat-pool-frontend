import { Fragment } from 'react';

import { Column1, Column2, Wrapper } from './ActionDonuts.styled';

const ActionDonuts = () => {
  const getColumns = () => {
    const donuts: JSX.Element[] = [];
    for (let i = 0; i < 6; i++) {
      donuts.push(
        <Fragment key={i}>
          <Column1 />
          <Column2 />
        </Fragment>
      );
    }
    return donuts;
  };

  return (
    <Wrapper>
      {getColumns()}
      <Column1 />
    </Wrapper>
  );
};

export { ActionDonuts };
