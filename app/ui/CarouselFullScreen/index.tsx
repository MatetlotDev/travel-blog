'use client';

import { Picture } from '@/app/types';
import { dateToSentence } from '@/utils/dateToSentence';
import Image from 'next/image';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
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

  if (currentImage)
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>{dateToSentence(new Date(currentImage?.create_date))}</p>
          </div>
          <Image
            src={currentImage.url}
            alt="Same image but bigger"
            className={styles.image}
            fill
          />
        </div>
        <div className={styles.close} onClick={onClose}>
          <TfiClose />
        </div>
        <div className={styles.more}>
          <BiDotsHorizontalRounded />
        </div>
        <div
          className={`${styles.prev} ${styles.button} ${
            prevDisabled && styles.disabled
          }`}
        >
          <button onClick={onPrev}>
            <SlArrowLeft />
          </button>
        </div>
        <div
          className={`${styles.next} ${styles.button} ${
            nextDisabled && styles.disabled
          }`}
        >
          <button onClick={onNext}>
            <SlArrowRight />
          </button>
        </div>
      </div>
    );

  return null;
}
