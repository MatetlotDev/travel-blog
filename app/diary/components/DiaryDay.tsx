import { DiaryDay as DiaryDayType } from '@/app/types';
import Images from './Images';
import styles from './style.module.scss';

interface Props {
  day: DiaryDayType;
  idx: number;
}

const DiaryDay = (props: Props) => {
  const { day, idx } = props;

  const date = new Date(day.date);
  const dateAsString = date.toLocaleDateString('fr-FR', { dateStyle: 'full' });
  const dateWithUppercase = `${dateAsString[0].toUpperCase()}${dateAsString.slice(
    1,
    dateAsString.length
  )}`;

  return (
    <article className={styles.wrapper}>
      <div
        className={styles.content}
        style={{ flexDirection: idx % 2 ? 'row-reverse' : 'row' }}
      >
        <div className={styles.flexGroup}>
          <p
            className={styles.date}
            style={{ float: idx % 2 ? 'right' : 'left' }}
          >
            {dateWithUppercase}
          </p>
          <Images pictures={day.pictures} />
        </div>
        <div
          className={styles.text}
          style={{ margin: idx % 2 ? '75px 100px 0 0' : '75px 0 0 100px' }}
        >
          <h4>{day.title}</h4>
          <p>{day.text}</p>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <svg
        style={{
          transform:
            idx % 2 ? 'translateX(-50%) rotateX(180deg)' : 'translateX(-50%)',
        }}
        width="1153"
        height="1055"
        viewBox="0 0 1153 1055"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 0.5C1.5 310 267.5 418.5 547 418.5C826.5 418.5 1152 636 1152 1055"
          stroke="#182C25"
          stroke-width="2"
          stroke-dasharray="8 8"
          id={`svg_path_${idx}`}
        />
      </svg>
    </article>
  );
};

export default DiaryDay;
