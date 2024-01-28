'use client';

import { ReactNode, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import styles from './style.module.scss';

interface Props {
  children: ReactNode;
}

export default function FiltersWrapper(props: Props) {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={styles.wrapper}
      style={{ display: open ? '100%' : 'fit-content' }}
    >
      <div
        className={styles['filters-content']}
        style={open ? { padding: '30px', width: 'fit-content' } : {}}
      >
        {open ? (
          <div className={styles.content}>
            <div className={styles.flex}>
              <h2>Filtres actuels</h2>
              <button onClick={handleClose}>
                <TfiClose size={12} />
              </button>
            </div>
            {children}
          </div>
        ) : (
          <div className={styles['open-button_wrapper']} onClick={handleOpen}>
            <div className={styles['open-button']}>
              <p>Filtres</p>
              <SlArrowDown size={11} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.blur} />
    </div>
  );
}
