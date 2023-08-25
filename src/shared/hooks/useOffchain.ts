import { useState, useEffect } from 'react';

function useOffchain() {
  const [offchain, setOffchain] = useState<Awaited<Window['donatPool']>>();

  useEffect(function f() {
    if (Object.hasOwn(window, 'donatPool')) {
      (window.donatPool as any).then(setOffchain, console.error);
      return;
    }

    setTimeout(f);
  }, []);

  return offchain;
}

export default useOffchain;
