'use client';

import { ReactNode, useRef, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import styles from './style.module.scss';

interface Props {
  children: ReactNode;
}

export default function FiltersWrapper(props: Props) {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const blurRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setOpen(true);
    if (blurRef.current) blurRef.current.style.bottom = '0';
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      if (blurRef.current) blurRef.current.style.bottom = 'unset';
    }, 400);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles['filters-content']}
          style={open ? { padding: '30px', width: '400px' } : {}}
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
      </div>
      <div
        ref={blurRef}
        className={styles.blur}
        style={{ opacity: open ? 1 : 0 }}
      />
    </>
  );
}
