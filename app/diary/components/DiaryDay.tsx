import { DiaryDay as DiaryDayType } from '@/app/types';
import Images from './Images';
import styles from './style.module.scss';

interface Props {
  day: DiaryDayType;
}

const DiaryDay = (props: Props) => {
  const { day } = props;

  const date = new Date(day.date);

  return (
    <section className={styles.wrapper}>
      <div className={styles.date}>
        <p>{date.toLocaleDateString()}</p>
      </div>
      <h4>{day.title}</h4>
      <div className={styles.content}>
        <Images pictures={day.pictures} />
        <div className={styles.text}>
          <p>{day.text}</p>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaryDay;
