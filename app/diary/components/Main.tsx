'use client';

import { getPaginatedDiaries } from '@/app/(actions)/diary';
import { DiaryDay as DiaryDayType, Picture } from '@/app/types';
import { CarouselFullScreen } from '@/app/ui';
import buttonStyles from '@/app/ui/Button/style.module.scss';
import { useState } from 'react';
import DiaryDay from './DiaryDay';

interface Props {
  diaries: DiaryDayType[];
}

export default function Main(props: Props) {
  const { diaries } = props;

  const [diariesList, setDiariesList] = useState<DiaryDayType[]>(diaries);
  const [loading, setLoading] = useState(false);
  const [currentImages, setCurrentImages] = useState<{
    pictures: Picture[];
    current: number | null;
  }>({ pictures: [], current: null });

  const handleLoadMore = async () => {
    setLoading(true);

    const lastId = diariesList[diariesList.length - 1].id;

    const newDiaries = await getPaginatedDiaries('next', lastId);

    setDiariesList((prev) => [...prev, newDiaries[0]]);

    setLoading(false);
  };

  const handleNext = () => {
    if (
      currentImages.current !== null &&
      currentImages.current < currentImages.pictures.length - 1
    )
      setCurrentImages((prev) => {
        if (currentImages.current != null)
          return {
            ...prev,
            current: currentImages.current + 1,
          };

        return prev;
      });
  };

  const handlePrev = () => {
    if (currentImages.current)
      setCurrentImages((prev) => {
        if (currentImages.current !== null)
          return {
            ...prev,
            current: currentImages.current - 1,
          };

        return prev;
      });
  };

  const handleClose = () => {
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'unset');
    setCurrentImages({ pictures: [], current: null });
  };

  return (
    <>
      {diariesList.map((day, idx) => (
        <DiaryDay
          key={day.id}
          day={day}
          idx={idx}
          length={diariesList.length}
          setCurrentImages={setCurrentImages}
        />
      ))}
      {loading ? (
        <span className={buttonStyles.loader} />
      ) : (
        <button
          className={buttonStyles.button}
          style={{ zIndex: 11 }}
          onClick={handleLoadMore}
        >
          Afficher le précedent
        </button>
      )}
      <CarouselFullScreen
        currentImage={
          currentImages.current !== null
            ? currentImages.pictures[currentImages.current]
            : null
        }
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
        prevDisabled={currentImages.current === 0}
        nextDisabled={
          currentImages.current === currentImages.pictures.length - 1
        }
      />
    </>
  );
}
