import { useMemo, useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from './style.module.scss';

interface Props {
  filters: Date;
  setFilters: (date: Date) => void;
}

const ONE_DAY = 86400000;

export default function ScrollDatePicker(props: Props) {
  const { filters, setFilters } = props;

  const [date, setDate] = useState(new Date());

  const fillDateWith0 = (value: number) => {
    const valAsString = value.toString();
    if (valAsString.length === 2) return valAsString;
    return `0${value}`;
  };

  const currentDay = fillDateWith0(date.getDate());
  const currentMonth = fillDateWith0(date.getMonth() + 1);
  const currentYear = date.getFullYear();
  const prevDay = useMemo(
    () => fillDateWith0(new Date(date.getTime() - ONE_DAY).getDate()),
    [date]
  );
  const prevMonth = useMemo(() => {
    const month = date.getMonth() + 1;
    if (month === 1) return 12;
    return fillDateWith0(month - 1);
  }, [date]);
  const prevYear = useMemo(() => date.getFullYear() - 1, [date]);
  const nextDay = useMemo(
    () => fillDateWith0(new Date(date.getTime() + ONE_DAY).getDate()),
    [date]
  );
  const nextMonth = useMemo(() => {
    const month = date.getMonth() + 1;
    if (month === 12) return '01';
    return fillDateWith0(month + 1);
  }, [date]);
  const nextYear = useMemo(() => date.getFullYear() + 1, [date]);

  return (
    <div className={styles.date_picker_wrapper}>
      <div className={styles.toggle_group}>
        <p>Jour</p>
        <div className={styles.picker}>
          <span className={styles.previous_value}>{prevDay}</span>
          <span className={styles.value}>{currentDay}</span>
          <span className={`${styles.value} ${styles.hidden}`}>
            {currentDay}
          </span>
          <span className={styles.next_value}>{nextDay}</span>
          <button>
            <SlArrowDown />
          </button>
          <button>
            <SlArrowUp />
          </button>
        </div>
      </div>
      <div className={styles.toggle_group}>
        <p>Mois</p>
        <div className={styles.picker}>
          <span className={styles.previous_value}>{prevMonth}</span>
          <span className={styles.value}>{currentMonth}</span>
          <span className={`${styles.value} ${styles.hidden}`}>
            {currentMonth}
          </span>
          <span className={styles.next_value}>{nextMonth}</span>
          <button>
            <SlArrowDown />
          </button>
          <button>
            <SlArrowUp />
          </button>
        </div>
      </div>
      <div className={styles.toggle_group}>
        <p>Année</p>
        <div className={styles.picker}>
          <span className={styles.previous_value}>{prevYear}</span>
          <span className={styles.value}>{currentYear}</span>
          <span className={`${styles.value} ${styles.hidden}`}>
            {currentYear}
          </span>
          <span className={styles.next_value}>{nextYear}</span>
          <button>
            <SlArrowDown />
          </button>
          <button>
            <SlArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}
