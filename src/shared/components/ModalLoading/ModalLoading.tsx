import { useEffect, useState } from 'react';

import { Description, Img, Inner, Title } from './ModalLoading.styled';
import { Modal } from '../.';

const ModalLoading = ({
  isOpen,
  title = 'Please wait...',
  description = 'Please wait a bit. We are preparing your donut',
}) => {
  const [index, setIndex] = useState(0);
  const maxDonutIndex = 4;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i > maxDonutIndex - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
      setIndex(i);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Modal isOpen={isOpen}>
      <Inner>
        <Title>{title}</Title>
        <Img src={`/img/donut-${index}.svg`} />
        <Description>{description}</Description>
      </Inner>
    </Modal>
  );
};

export { ModalLoading };
