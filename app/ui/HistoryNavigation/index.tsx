'use client';

import styles from './style.module.scss';

// interface Props {
//   lastDate: Date;
//   firstDate: Date;
// }

const HistoryNavigation = () => {
  // const { lastDate, firstDate } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.dates}>
        <span>2024</span>
        <span>2023</span>
        <span>2022</span>
      </div>
      <div className={styles['slider--bar']}>
        <div className={styles['slider-circle__outer']}>
          <div className={styles['slider-circle__inner']}></div>
        </div>
      </div>
    </div>
  );
};

export default HistoryNavigation;
