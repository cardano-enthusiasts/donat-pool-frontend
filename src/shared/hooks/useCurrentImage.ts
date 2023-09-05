import { ReactElement, useEffect, useState } from 'react';

function useCurrentImage(images: ReactElement[]) {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i > images.length - 2) {
        i = 0;
      } else {
        i = i + 1;
      }
      setImage(images[i]);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return image;
}

export default useCurrentImage;
