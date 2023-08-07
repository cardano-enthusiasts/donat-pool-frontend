import { useState, useEffect } from 'react';

const useDonatPool = () => {
  const [donatPool, setDonatPool] = useState<Awaited<Window['donatPool']>>();

  useEffect(() => {
    window.donatPool.then(setDonatPool, console.log);
  }, []);

  return donatPool;
};

export default useDonatPool;
