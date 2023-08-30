import { useEffect, useState } from 'react';

function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setWindowScroll(Math.round(window.scrollY));
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return windowScroll;
}

export default useWindowScroll;
