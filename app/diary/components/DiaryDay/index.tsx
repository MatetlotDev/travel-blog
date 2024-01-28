import { DiaryDay as DiaryDayType } from '@/app/types';
import ImageWrapper from './ImageWrapper';
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
        <div className={styles.pictures}>
          {day.pictures.map((pic, idx) => (
            <ImageWrapper
              key={pic.id}
              pic={pic}
              idx={idx}
              picturesLength={day.pictures.length}
            />
          ))}
        </div>
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
