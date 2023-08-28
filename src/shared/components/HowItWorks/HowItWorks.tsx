import { ITEMS } from './data';
import styles from './HowItWorks.module.css';
import { Tutorial } from '..';

function HowItWorks() {
  return (
    <>
      <div className="mb-15 flex flex-col gap-15 max-xl:mb-[1.875rem] max-xl:gap-[1.875rem]">
        {ITEMS.map(({ title, description, id }) => (
          <div className={styles.item} key={id}>
            <div className={`${styles.main} text-black`}>{title}</div>
            <div className={`${styles.secondary} bg-red text-white max-md:text-black`}>{description}</div>
          </div>
        ))}
      </div>
      <Tutorial />
    </>
  );
}

export default HowItWorks;
