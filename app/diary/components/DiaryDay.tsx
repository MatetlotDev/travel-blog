import { DiaryDay as DiaryDayType } from '@/app/types';
import Images from './Images';
import styles from './style.module.scss';

interface Props {
  day: DiaryDayType;
}

const DiaryDay = (props: Props) => {
  const { day } = props;

  const date = new Date(day.date);
  const dateAsString = date.toLocaleDateString('fr-FR', { dateStyle: 'full' });
  const dateWithUppercase = `${dateAsString[0].toUpperCase()}${dateAsString.slice(
    1,
    dateAsString.length
  )}`;

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.flexGroup}>
          <p className={styles.date}>{dateWithUppercase}</p>
          <Images pictures={day.pictures} />
        </div>
        <div className={styles.text}>
          <h4>{day.title}</h4>
          <p>{day.text}</p>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DiaryDay;
