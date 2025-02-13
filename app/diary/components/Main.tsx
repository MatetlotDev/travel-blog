'use client';

import { getPaginatedDiaries } from '@/app/(actions)/diary';
import { DiaryDay as DiaryDayType, Picture } from '@/app/types';
import { CarouselFullScreen, FiltersWrapper } from '@/app/ui';
import buttonStyles from '@/app/ui/Button/style.module.scss';
import { useState } from 'react';
import { Filters } from '../types';
import DiaryDay from './DiaryDay';
import FirstDate from './Filters/FirstDate';

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
  const [filters, setFilters] = useState<Filters>({
    first_date: diaries[0].date,
  });

  const handleLoadMore = async () => {
    setLoading(true);

    const lastId = diariesList[diariesList.length - 1].id;
    const newDiaries = await getPaginatedDiaries('next', lastId, filters);

    setDiariesList((prev) => [...prev, newDiaries[0]]);
    setLoading(false);
  };

  const handleNextImage = () => {
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

  const handlePrevImage = () => {
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

  const handleCloseImage = () => {
    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'unset');
    setCurrentImages({ pictures: [], current: null });
  };

  const handleSetFilters = async (newFilters: Filters) => {
    setLoading(true);
    setFilters(newFilters);

    const newDiaries = await getPaginatedDiaries('init', undefined, newFilters);

    setDiariesList(newDiaries);
    setLoading(false);
    // TODO: ajouter un feedback genre toaster "filtres appliqués !"
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
      <FiltersWrapper fetching={loading}>
        <FirstDate
          filters={filters}
          setFilters={(val) => handleSetFilters(val)}
        />
      </FiltersWrapper>
      <CarouselFullScreen
        currentImage={
          currentImages.current !== null
            ? currentImages.pictures[currentImages.current]
            : null
        }
        onClose={handleCloseImage}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        prevDisabled={currentImages.current === 0}
        nextDisabled={
          currentImages.current === currentImages.pictures.length - 1
        }
      />
    </>
  );
}
