import { useState, useEffect } from 'react';

function useOffchain() {
  const [offchain, setOffchain] = useState<Awaited<Window['donatPool']>>();

  useEffect(function f() {
    if (Object.hasOwn(window, 'donatPool')) {
      // hasOwn on 7th line ensures that "donatPool" is present in "window"
      window.donatPool!.then(setOffchain, console.error);
      return;
    }

    setTimeout(f);
  }, []);

  return offchain;
}

export default useOffchain;
