import { formatDateToValue } from '@/utils/DD/MM/YYYYtoYYYY-MM-DD';
import { Filters } from '../../types';
import styles from './style.module.scss';

interface Props {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export default function FirstDate(props: Props) {
  const { filters, setFilters } = props;

  return (
    <div className={styles.filters_first_date}>
      <h4>Première date</h4>
      <input
        type="date"
        value={formatDateToValue(
          new Date(filters.first_date).toLocaleDateString()
        )}
        onChange={(e) => setFilters({ ...filters, first_date: e.target.value })}
      />
    </div>
  );
}
