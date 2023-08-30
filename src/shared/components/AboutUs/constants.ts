import kate from '@public/img/kate.png';
import mariya from '@public/img/mariya.png';
import oksana from '@public/img/oksana.png';
import olga from '@public/img/olga.png';
import svetlana from '@public/img/svetlana.png';

import { Photo } from './types';

const COMMON_ROW_STYLES = 'max-xxs:h-[56.25rem] max-1.5xl:h-[75rem] max-xl:h-[62.5rem] max-md:h-[43.75rem]';

const STYLES = {
  kate: 'absolute left-[-3.125rem] top-[5.125rem] z-[2] h-auto w-[21.875rem] shrink-0 max-1.5xl:left-0 max-xl:top-[5.6875rem] max-xl:w-[16.4375rem] max-md:top-[6.0625rem] max-md:w-[10.9375rem] max-xxs:top-80',
  oksana:
    'absolute left-[8%] top-[-1.375rem] z-[1] h-auto w-[26.25rem] shrink-0 max-1.5xl:left-0 max-1.5xl:right-0 max-1.5xl:mx-auto max-xl:top-[0.8125rem] max-xl:w-[19.6875rem] max-md:top-[2.8125rem] max-md:w-[13.125rem] max-xxs:top-[0]',
  olga: 'w-[23.125rem] absolute left-[26%] top-[6.9375rem] z-[1] h-auto shrink-0 max-1.5xl:left-auto max-1.5xl:right-0 max-xl:w-[17.375rem] max-md:w-[11.5625rem] max-xxs:top-[20.9375rem]',
  svetlana:
    'absolute left-1/2 top-[8.0625rem] z-[3] h-auto w-[21.875rem] shrink-0 max-1.5xl:bottom-0 max-1.5xl:left-0 max-1.5xl:top-auto max-xl:w-[16.4375rem] max-md:w-[10.9375rem] max-xxs:top-[44.0625rem]',
  mariya:
    'absolute right-[-1.875rem] z-[1] h-auto w-[25rem] shrink-0 max-1.5xl:bottom-[3rem] max-1.5xl:right-0 max-xl:bottom-[2.25rem] max-xl:w-[18.75rem] max-md:bottom-[1.5rem] max-md:w-[12.5rem] max-xxs:top-[40rem]',
};

const PHOTOS: Photo[] = [
  { src: kate, className: STYLES.kate, alt: 'kate photo', isFirstRow: true },
  { src: oksana, className: STYLES.oksana, alt: 'oksana photo', isFirstRow: true },
  { src: olga, className: STYLES.olga, alt: 'olga photo', isFirstRow: true },
  { src: svetlana, className: STYLES.svetlana, alt: 'svetlana photo', isFirstRow: false },
  { src: mariya, className: STYLES.mariya, alt: 'mariya photo', isFirstRow: false },
];

export { PHOTOS, COMMON_ROW_STYLES };
