import { useState, useEffect } from 'react';

const useOffchain = () => {
  const [donatPool, setDonatPool] = useState<Awaited<Window['donatPool']>>();

  useEffect(() => {
    void window.donatPool.then((result) => {
      setDonatPool(result);
    });
  }, []);

  return donatPool;
};

export { useOffchain };
