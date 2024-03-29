'use client';

import { Picture } from '@/app/types';
import { dateToSentence } from '@/utils/dateToSentence';
import NextImage from 'next/image';
// import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import styles from './style.module.scss';

interface Props {
  currentImage: Picture | null;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

export default function CarouselFullScreen(props: Props) {
  const { currentImage, onClose, onPrev, onNext, prevDisabled, nextDisabled } =
    props;

  const [changing, setChanging] = useState(false);

  const handlePrev = () => {
    onPrev();
    setChanging(true);
    setTimeout(() => setChanging(false), 10);
  };

  const handleNext = () => {
    onNext();
    setChanging(true);
    setTimeout(() => setChanging(false), 10);
  };

  if (currentImage)
    return (
      <div className={styles.wrapper}>
        <p className={styles.date}>
          {dateToSentence(new Date(currentImage?.create_date))}
        </p>
        <p className={styles.description}>{currentImage.description || ''}</p>
        <div className={styles.content}>
          {!changing && (
            <NextImage
              src={currentImage.url}
              alt="Same image but bigger"
              className={styles.image}
              fill
              sizes="(min-width: 768px) 100vw"
              placeholder="blur"
              blurDataURL={currentImage.blur_url}
            />
          )}
        </div>
        <div className={styles.close} onClick={onClose}>
          <TfiClose />
        </div>
        {/* <div className={styles.more}>
          <BiDotsHorizontalRounded />
        </div> */}
        <div
          className={`${styles.prev} ${styles.button} ${
            prevDisabled && styles.disabled
          }`}
        >
          <button onClick={handlePrev}>
            <SlArrowLeft />
          </button>
        </div>
        <div
          className={`${styles.next} ${styles.button} ${
            nextDisabled && styles.disabled
          }`}
        >
          <button onClick={handleNext}>
            <SlArrowRight />
          </button>
        </div>
      </div>
    );

  return null;
}
