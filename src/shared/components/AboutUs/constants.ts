import styles from './AboutUs.module.scss';
import { Photo } from './types';

const photos: Array<Photo> = [
  { title: 'kate', className: styles.kate, alt: 'kate photo', width: 350, height: 391, isFirstRow: true },
  { title: 'oksana', className: styles.oksana, alt: 'oksana photo', width: 420, height: 490, isFirstRow: true },
  { title: 'olga', className: styles.olga, alt: 'olga photo', width: 376, height: 360, isFirstRow: true },
  { title: 'svetlana', className: styles.svetlana, alt: 'svetlana photo', width: 355, height: 346, isFirstRow: false },
  { title: 'mariya', className: styles.mariya, alt: 'mariya photo', width: 400, height: 454, isFirstRow: false },
];

export { photos };
