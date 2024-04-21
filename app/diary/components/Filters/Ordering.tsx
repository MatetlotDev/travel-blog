'use client';

import { Filters } from '../../types';
import styles from './style.module.scss';

interface Props {
  filters: Filters['ordering'];
  setFilters: (val: Filters['ordering']) => void;
}

export default function Ordering(props: Props) {
  const { filters, setFilters } = props;

  return (
    <div className={styles['filters-ordering']}>
      <h4>Ordonner</h4>
      <div className={styles['input-wrapper']}>
        <input
          id="radio_button_desc"
          type="radio"
          name="order"
          checked={filters === 'desc'}
          onChange={() => setFilters('desc')}
        />
        <div className={styles['input-replacement']} />
        <label htmlFor="radio_button_desc">Décroissant</label>
      </div>
      <div className={styles['input-wrapper']}>
        <input
          id="radio_button_asc"
          type="radio"
          name="order"
          checked={filters === 'asc'}
          onChange={() => setFilters('asc')}
        />
        <div className={styles['input-replacement']} />
        <label id="radio_button_desc">Croissant</label>
      </div>
    </div>
  );
}
