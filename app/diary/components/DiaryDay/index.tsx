import { DiaryDay as DiaryDayType } from 'app/constants/global';
import Image from 'next/image';
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
            <div key={pic.id} className={styles.image}>
              <Image
                src={pic.url}
                alt="picture of the day"
                fill
                objectFit="cover"
                // sizes='' TODO
              />
              {day.pictures.length >= 9 && idx === day.pictures.length - 1 && (
                <div className={styles.last}>
                  <p>+ {day.pictures.length - 8}</p>
                </div>
              )}
            </div>
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
