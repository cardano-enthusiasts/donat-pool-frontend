import { useEffect, useState } from 'react';

const useOffchain = () => {
  const [offchain, setOffchain] = useState<Window['offchain']>();
  useEffect(() => {
    if (window.offchain) {
      window.offchain.then(setOffchain);
    }
  }, []);

  return offchain;
};

export { useOffchain };