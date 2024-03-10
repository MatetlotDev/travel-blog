'use client';

import { getPaginatedDiaries } from '@/app/actions/diary';
import { DiaryDay as DiaryDayType } from '@/app/types';
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

  const handleLoadMore = async () => {
    setLoading(true);

    const lastId = diariesList[diariesList.length - 1].id;

    const newDiaries = await getPaginatedDiaries('next', lastId);

    setDiariesList((prev) => [...prev, newDiaries[0]]);

    setLoading(false);
  };

  return (
    <>
      {diariesList.map((day, idx) => (
        <DiaryDay
          key={day.id}
          day={day}
          idx={idx}
          length={diariesList.length}
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
    </>
  );
}
