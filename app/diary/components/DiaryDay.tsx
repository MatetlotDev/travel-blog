import { DiaryDay as DiaryDayType } from '@/app/types';
import { useEffect, useRef } from 'react';
import Images from './Images';
import styles from './style.module.scss';

interface Props {
  day: DiaryDayType;
  idx: number;
  length: number;
}

const DiaryDay = (props: Props) => {
  const { day, idx, length } = props;

  const date = new Date(day.date);
  const dateAsString = date.toLocaleDateString('fr-FR', { dateStyle: 'full' });
  const dateWithUppercase = `${dateAsString[0].toUpperCase()}${dateAsString.slice(
    1,
    dateAsString.length
  )}`;

  const pathRef = useRef<SVGPathElement | null>(null);
  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const totalHeight = document.documentElement.scrollHeight;
    const pathLength = pathRef.current?.getTotalLength() || 0;

    const handleScroll = () => {
      const scrollFromTop = document.documentElement.scrollTop;

      if (pathRef.current) {
        if (scrollFromTop < 10) {
          pathRef.current.style.strokeDashoffset =
            idx % 2 ? '0' : pathLength.toString();
        } else {
          const scrollPercentage = (scrollFromTop / totalHeight) * length;
          const drawLength = pathLength * scrollPercentage + 900;

          if (idx % 2) {
            pathRef.current.style.strokeDashoffset = drawLength.toString();
          } else {
            pathRef.current.style.strokeDashoffset = (
              pathLength - drawLength
            ).toString();
          }
        }
      }
    };

    if (pathRef.current) {
      const scrollFromTop = document.documentElement.scrollTop;

      pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`; // set the dashes as the height of the path

      if (scrollFromTop > 10) {
        handleScroll(); // run the function once before scroll event if page is already scrolled
      } else {
        pathRef.current.style.strokeDashoffset = pathLength.toString();
      }

      pathRef.current.style.display = 'block';
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={styles.wrapper} ref={wrapperRef}>
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
        className={styles.line}
        viewBox="0 0 1153 1055"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          ref={pathRef}
          d="M1.5 0.5C1.5 310 267.5 418.5 547 418.5C826.5 418.5 1152 636 1152 1055"
          stroke="#182C25"
          stroke-width="4"
          style={{ display: 'none' }}
        />
      </svg>
      <svg
        style={{
          transform:
            idx % 2 ? 'translateX(-50%) rotateX(180deg)' : 'translateX(-50%)',
        }}
        className={styles.line}
        viewBox="0 0 1153 1055"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M1.5 0.5C1.5 310 267.5 418.5 547 418.5C826.5 418.5 1152 636 1152 1055"
          stroke="#182C25"
          stroke-width="2"
          stroke-dasharray="8 8"
        />
      </svg>
    </article>
  );
};

export default DiaryDay;
