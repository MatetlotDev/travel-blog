'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styles from './style.module.scss';

export interface imageType {
  path: string;
  country: string;
  region: string;
  date: Date;
  [key: string]: any;
}
interface ImagesCarouselProps {
  images: imageType[];
}

const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const [fakeIndex, setFakeIndex] = useState(0);
  const [actual, setActual] = useState(1);

  const mockedImages = useMemo(() => {
    return images.map((img: imageType, idx: number) => {
      const index =
        idx + fakeIndex >= images.length
          ? idx + fakeIndex - images.length
          : idx + fakeIndex;

      let className;
      if (index === 0) className = 'left';
      else if (index === 1) className = 'center';
      else if (index === 2) className = 'right';
      else className = 'behind';
      return { ...img, className };
    });
  }, [fakeIndex, images]);

  const handleNext = () => {
    if (fakeIndex === 0) setFakeIndex(images.length - 1);
    else setFakeIndex(fakeIndex - 1);

    if (actual === images.length - 1) setActual(0);
    else setActual(actual + 1);
  };

  const handlePrev = () => {
    if (fakeIndex < images.length - 1) setFakeIndex(fakeIndex + 1);
    else setFakeIndex(0);

    if (actual === 0) setActual(images.length - 1);
    else setActual(actual - 1);
  };

  const description = useMemo(() => {
    const imgDate = images[actual]?.date.toLocaleDateString('fr-BE', {
      month: 'long',
      year: 'numeric',
    });

    return `${images[actual]?.region} (${images[actual]?.country}), ${imgDate
      .charAt(0)
      .toUpperCase()}${imgDate.slice(1)}`;
  }, [actual, images]);

  return (
    <div className={styles.wrapper}>
      {mockedImages.map((img: imageType) => {
        return (
          <div
            key={img.path}
            className={`${styles['image-wrapper']} ${styles[img.className]}`}
          >
            <Image
              src={img.path}
              width={350}
              height={510}
              alt="group of people"
            />
          </div>
        );
      })}
      <div className={styles['backdrop-carousel']} id="backdrop-carousel" />
      <button
        onClick={handlePrev}
        className={`${styles['left-arrow']} ${styles['change-img_button']}`}
      >
        <SlArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className={`${styles['right-arrow']} ${styles['change-img_button']}`}
      >
        <SlArrowRight />
      </button>
      <p className={styles['image-description']}>
        <CiLocationOn className={styles['icon']} />
        {description}
      </p>
    </div>
  );
};

export default ImagesCarousel;
