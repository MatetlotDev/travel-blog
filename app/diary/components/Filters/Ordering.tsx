'use client';

import styles from './style.module.scss';

export default function Ordering() {
  /**
   * Un titre
   * deux radio button (asc & desc)
   * à chaque changement on fait un getDiariesOrdered('asc' | 'desc')
   *
   */

  return (
    <div className={styles['filters-ordering']}>
      <h3>Ordonner</h3>
      <div className={styles['input-wrapper']}>
        <input
          id="radio_button_desc"
          type="radio"
          name="order"
          value="desc"
          defaultChecked
        />
        <label htmlFor="radio_button_desc">Décroissant</label>
      </div>
      <div className={styles['input-wrapper']}>
        <input id="radio_button_asc" type="radio" name="order" value="asc" />
        <label id="radio_button_desc">Croissant</label>
      </div>
    </div>
  );
}
