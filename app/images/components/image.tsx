'use client';

import { Picture } from '@/app/types';
import styles from '../style.module.scss';

interface Props {
  picture: Picture;
}

export default function ImageWrapper(props: Props) {
  const { picture } = props;

  return (
    <div
      className={styles['image-wrapper']}
      style={{ backgroundImage: `url(${picture.url})` }}
      onClick={() => {
        // handle open modal
      }}
      key={picture.id}
    />
  );
}
