import { useState, useEffect } from 'react';

const useDonatPool = () => {
  const [donatPool, setDonatPool] = useState<Awaited<Window['donatPool']>>();

  useEffect(function f() {
    if (Object.hasOwn(window, 'donatPool')) {
      window.donatPool.then(setDonatPool, console.error);
      return;
    }

    setTimeout(f, 500);
  }, []);

  return donatPool;
};

export default useDonatPool;