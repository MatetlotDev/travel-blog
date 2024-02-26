'use client';

import { Picture } from '@/app/types';
import { CarouselFullScreen } from '@/app/ui';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';
import ImageWrapper from './ImageWrapper';
import styles from './style.module.scss';

interface Props {
  pictures: Picture[];
}

export default function Images(props: Props) {
  const { pictures } = props;

  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [currentImgSm, setCurrentImageSm] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [startX, setStartX] = useState<number>(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  const handleMouseDown = (e: MouseEvent<HTMLElement>) => {
    setPressed(true);
    setStartX(e.clientX - (carouselRef.current?.offsetLeft || 0));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setPressed(true);
    setStartX(e.touches[0].clientX - (carouselRef.current?.offsetLeft || 0));
  };

  const handleMouseUp = () => {
    setPressed(false);

    const containerWidth =
      containerRef.current?.getBoundingClientRect().width || 0;
    const carouselX = parseInt(carouselRef.current?.style.left || '') || 0;
    const closestPosition =
      Math.round(carouselX / containerWidth) * containerWidth;

    if (carouselRef.current) {
      setCurrentImageSm(Math.round(Math.abs(carouselX) / containerWidth));
      carouselRef.current.style.transition = 'all 0.3s';
      carouselRef.current.style.left = `${closestPosition}px`;

      setTimeout(() => {
        if (carouselRef.current) carouselRef.current.style.transition = 'unset';
      }, 300);
    }
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

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!pressed) return;

    e.preventDefault();

    if (carouselRef.current && containerRef.current) {
      carouselRef.current.style.left = `${e.clientX - startX}px`;
      boundElements();
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!pressed) return;

    if (carouselRef.current && containerRef.current) {
      carouselRef.current.style.left = `${e.touches[0].clientX - startX}px`;
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
        onTouchEnd={handleMouseUp}
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
        <CarouselFullScreen
          currentImage={currentIdx !== null ? pictures[currentIdx] : null}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          prevDisabled={currentIdx === 0}
          nextDisabled={currentIdx === pictures.length - 1}
        />
      </div>
    </>
  );
}
