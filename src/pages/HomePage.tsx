import { useEffect, type FC } from 'react';

import { Base, Home } from 'layouts';

const HomePage: FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <Base>
      <Home />
    </Base>
  );
};

export { HomePage };
