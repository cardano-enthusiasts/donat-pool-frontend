'use client';

import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(Math.round(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return windowScroll;
};

export default useWindowScroll;
