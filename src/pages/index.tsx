import { type FC } from 'react';

import Base from 'layouts/Base/Base';

const Home: FC = () => {
  return (
    <Base
      title="Home"
      description="description"
      keywords="keywords"
      activeHeaderItem="home"
    >
      <div>hello</div>
    </Base>
  );
};

export default Home;
