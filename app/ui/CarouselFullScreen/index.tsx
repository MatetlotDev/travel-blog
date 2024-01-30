'use client';

import { getDiaryImages } from '@/app/actions';
import { Picture } from '@/app/types';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import styles from './style.module.scss';

const CarouselFullScreen = () => {
  const searchParams = useSearchParams();

  const dayId = searchParams.get('id');
  const idx = Number(searchParams.get('idx')) || 0;

  const [images, setImages] = useState<Picture[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(idx);

  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const getImages = async () => {
      const images: Picture[] = await getDiaryImages(dayId || '');

      setImages(images);
    };

    getImages();
  }, [dayId]);

  const handleCloseCarousel = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('id');
    params.delete('idx');

    replace(`${pathname}`);
  };

  const handlePrevImage = () => {};

  const handleNextImage = () => {};

  const currentImage = images?.[currentIdx];

  if (currentImage)
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            {/* <p>{dateToSentence(currentImage?.create_date)}</p> */}
          </div>
          <Image
            src={currentImage.url}
            alt="Same image but bigger"
            className={styles.image}
            fill
          />
        </div>
        <div className={styles.close} onClick={handleCloseCarousel}>
          <TfiClose />
        </div>
        <div className={styles.more}>
          <BiDotsHorizontalRounded />
        </div>
        <div className={`${styles.prev} ${styles.button}`}>
          <button onClick={handlePrevImage}>
            <SlArrowLeft />
          </button>
        </div>
        <div className={`${styles.next} ${styles.button}`}>
          <button onClick={handleNextImage}>
            <SlArrowRight />
          </button>
        </div>
      </div>
    );

  return null;
};

export default CarouselFullScreen;
