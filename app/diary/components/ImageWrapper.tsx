'use client';

import { Picture } from '@/app/types';
import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.scss';

interface Props {
  pic: Picture;
  idx: number;
  picturesLength: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (idx: number) => void;
}

export default function ImageWrapper(props: Props) {
  const { pic, idx, picturesLength, onClick } = props;

  const [loading, setLoading] = useState(true);

  const handleOpenCarousel = () => {
    onClick(idx);
  };

  return (
    <div className={styles.image} onClick={handleOpenCarousel}>
      {loading && <span />}
      <Image
        src={pic.url}
        alt="picture of the day"
        fill
        sizes="100vw"
        style={{ filter: loading ? 'blur(10px)' : 'none' }}
        onLoad={() => setLoading(false)}
      />
      {picturesLength > 9 && idx === 8 && (
        <div className={styles.last}>
          <p>+ {picturesLength - 8}</p>
        </div>
      )}
    </div>
  );
}
