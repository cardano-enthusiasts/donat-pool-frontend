import { type FC } from 'react';

import Base from 'layouts/Base/Base';
import Home from 'layouts/Home/Home';

const HomePage: FC = () => {
  return (
    <Base
      title="Donat.Pool"
      description="description"
      keywords="keywords"
      activeHeaderItem="home"
    >
      <Home />
    </Base>
  );
};

export default HomePage;
