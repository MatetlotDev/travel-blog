'use client';

import { Picture } from '@/app/types';
import { shimmer, toBase64 } from '@/utils/imagePlaceholder';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './style.module.scss';

interface Props {
  pic: Picture;
  idx: number;
  picturesLength: number;
  dayId: string;
}

export default function ImageWrapper(props: Props) {
  const { pic, idx, picturesLength, dayId } = props;

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleOpenCarousel = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('id', dayId);
    params.set('idx', idx.toString());
    replace(`${pathname}?${params}`);
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
