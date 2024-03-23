'use client';

import { Picture } from '@/app/types';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';
import ImageWrapper from './ImageWrapper';
import styles from './style.module.scss';

interface Props {
  pictures: Picture[];
  // eslint-disable-next-line no-unused-vars
  setCurrentImages: (param: { pictures: Picture[]; current: number }) => void;
}

export default function Images(props: Props) {
  const { pictures, setCurrentImages } = props;

  const [currentImgSm, setCurrentImageSm] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [carouselXStart, setCarouselXStart] = useState<number>(0);
  const [clientXStart, setClientXStart] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (idx: number) => {
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'hidden');
    setCurrentImages({ pictures, current: idx });
  };

  const boundElements = () => {
    if (containerRef.current && carouselRef.current) {
      let outer = containerRef.current.getBoundingClientRect();
      let inner = carouselRef.current.getBoundingClientRect();

      // make sure it doesn't go too far on the left
      if (parseInt(carouselRef.current.style.left) > 0) {
        carouselRef.current.style.left = '0px';
      }
      // make sure it doesn't go too far on the right
      if (inner.right < outer.right) {
        carouselRef.current.style.left = `-${inner.width - outer.width}px`;
      }
    }
  };

  const setCarouselPos = (val: number) => {
    const containerWidth =
      containerRef.current?.getBoundingClientRect().width || 0;

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'all 0.3s';
      carouselRef.current.style.left = `-${containerWidth * val}px`;

      setTimeout(() => {
        if (carouselRef.current) carouselRef.current.style.transition = 'unset';
      }, 300);
    }
  };

  const moveCarousel = (clientXend: number) => {
    // next image
    if (clientXend < clientXStart && currentImgSm < pictures.length - 1) {
      setCurrentImageSm(currentImgSm + 1);
      setCarouselPos(currentImgSm + 1);
    }
    // prev image
    if (clientXend > clientXStart && currentImgSm > 0) {
      setCurrentImageSm(currentImgSm - 1);
      setCarouselPos(currentImgSm - 1);
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLElement>) => {
    setPressed(true);
    setCarouselXStart(e.clientX - (carouselRef.current?.offsetLeft || 0));
    setClientXStart(e.clientX);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setPressed(true);
    setCarouselXStart(
      e.changedTouches[0].clientX - (carouselRef.current?.offsetLeft || 0)
    );
    setClientXStart(e.changedTouches[0].clientX);
  };

  const handleMouseUp = (e: MouseEvent<HTMLElement>) => {
    setPressed(false);
    moveCarousel(e.clientX);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    setPressed(false);
    moveCarousel(e.changedTouches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!pressed) return;

    e.preventDefault();

    if (carouselRef.current && containerRef.current) {
      carouselRef.current.style.left = `${e.clientX - carouselXStart}px`;
      boundElements();
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!pressed) return;

    if (carouselRef.current && containerRef.current) {
      carouselRef.current.style.left = `${
        e.changedTouches[0].clientX - carouselXStart
      }px`;
      boundElements();
    }
  };

  return (
    <>
      <div
        className={styles['pictures-sm']}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        ref={containerRef}
      >
        <div className={styles.chip}>
          {currentImgSm + 1} / {pictures.length}
        </div>
        <div className={styles.bubbles}>
          {pictures.map((pic, idx) => (
            <span
              className={idx === currentImgSm ? styles.active : ''}
              key={pic.id}
            />
          ))}
        </div>
        <div className={styles.carousel} ref={carouselRef}>
          {pictures.map((pic, idx) => (
            <ImageWrapper
              key={pic.id}
              pic={pic}
              idx={idx}
              picturesLength={pictures.length}
              onClick={handleOpen}
            />
          ))}
        </div>
      </div>
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
      </div>
    </>
  );
}
