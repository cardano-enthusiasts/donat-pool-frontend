import { type FC } from 'react';

import Base from 'layouts/Base/Base';

import Home from '../layouts/Home/Home';

const HomePage: FC = () => {
  return (
    <Base>
      <Home />
    </Base>
  );
};

export default HomePage;
