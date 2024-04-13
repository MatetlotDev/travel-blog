'use client';

import styles from './style.module.scss';

export default function Ordering() {
  return (
    <div className={styles['filters-ordering']}>
      <h4>Ordonner</h4>
      <div className={styles['input-wrapper']}>
        <input
          id="radio_button_desc"
          type="radio"
          name="order"
          value="desc"
          defaultChecked
        />
        <div className={styles['input-replacement']} />
        <label htmlFor="radio_button_desc">Décroissant</label>
      </div>
      <div className={styles['input-wrapper']}>
        <input id="radio_button_asc" type="radio" name="order" value="asc" />
        <div className={styles['input-replacement']} />
        <label id="radio_button_desc">Croissant</label>
      </div>
    </div>
  );
}
