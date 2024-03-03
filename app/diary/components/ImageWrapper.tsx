'use client';

import { Picture } from '@/app/types';
import { shimmer, toBase64 } from '@/utils/imagePlaceholder';
import Image from 'next/image';
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

  const handleOpenCarousel = () => {
    onClick(idx);
  };

  return (
    <div className={styles.image} onClick={handleOpenCarousel}>
      <Image
        src={pic.url}
        alt="picture of the day"
        fill
        style={{ objectFit: 'cover' }}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        sizes="200px"
      />
      {picturesLength > 9 && idx === 8 && (
        <div className={styles.last}>
          <p>+ {picturesLength - 8}</p>
        </div>
      )}
    </div>
  );
}
