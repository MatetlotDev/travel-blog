'use client';

import { Picture } from '@/app/types';
import { CarouselFullScreen } from '@/app/ui';
import { useState } from 'react';
import ImageWrapper from './ImageWrapper';
import styles from './style.module.scss';

interface Props {
  pictures: Picture[];
}

export default function Images(props: Props) {
  const { pictures } = props;

  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  const handleNext = () => {
    if (currentIdx !== null && currentIdx < pictures.length - 1)
      setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (currentIdx) setCurrentIdx(currentIdx - 1);
  };

  const handleOpen = (idx: number) => {
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'hidden');
    setCurrentIdx(idx);
  };

  const handleClose = () => {
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'unset');
    setCurrentIdx(null);
  };

  return (
    <div className={styles.pictures}>
      {pictures.map(
        (pic, idx) =>
          idx <= 8 && (
            <ImageWrapper
              key={pic.id}
              pic={pic}
              idx={idx}
              picturesLength={pictures.length}
              onClick={handleOpen}
            />
          )
      )}
      <CarouselFullScreen
        currentImage={currentIdx !== null ? pictures[currentIdx] : null}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
        prevDisabled={currentIdx === 0}
        nextDisabled={currentIdx === pictures.length - 1}
      />
    </div>
  );
}
