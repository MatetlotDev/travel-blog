'use client';

import { Picture } from '@/app/types';
import { shimmer, toBase64 } from '@/utils/imagePlaceholder';
import Image from 'next/image';
import styles from './style.module.scss';

interface Props {
  pic: Picture;
  idx: number;
  picturesLength: number;
}

export default function ImageWrapper(props: Props) {
  const { pic, idx, picturesLength } = props;

  const handleOpenCarousel = () => {
    // open the carousel
  };

  return (
    <div className={styles.image} onClick={handleOpenCarousel}>
      <Image
        src={pic.url}
        alt="picture of the day"
        fill
        style={{ objectFit: 'cover' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        // sizes='' TODO with responsive
      />
      {picturesLength > 9 && idx === picturesLength - 1 && (
        <div className={styles.last}>
          <p>+ {picturesLength - 8}</p>
        </div>
      )}
    </div>
  );
}
