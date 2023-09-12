import Donut0Image from '@public/images/donut-0.svg';
import Donut1Image from '@public/images/donut-1.svg';
import Donut2Image from '@public/images/donut-2.svg';
import Donut3Image from '@public/images/donut-3.svg';
import Donut4Image from '@public/images/donut-4.svg';

const firstImage = <Donut0Image />;

function getImage(part: number) {
  if (part < 0.2) {
    return firstImage;
  }
  if (part >= 0.2 && part < 0.4) {
    return <Donut1Image />;
  }
  if (part >= 0.4 && part < 0.6) {
    return <Donut2Image />;
  }
  if (part >= 0.6 && part < 1) {
    return <Donut3Image />;
  }
  return <Donut4Image />;
}

export { getImage, firstImage };
