import { DiaryDay as DiaryType } from '@/app/types';
import { getDiaries } from '@/firebase/firestore';
import { Header, HistoryNavigation } from 'app/ui';
import Head from 'next/head';
import DiaryDay from './components/DiaryDay';
import styles from './style.module.scss';

export default async function Diary() {
  const diaries = (await getDiaries()) as DiaryType[];

  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <div className={styles.wrapper}>
        <Header withSearchbar={false} />
        <HistoryNavigation
        // firstDate={new Date('22/05/2022')}
        // lastDate={new Date('12/08/2023')}
        />
        {diaries.map((day) => (
          <DiaryDay key={day.id} day={day} />
        ))}
      </div>
    </>
  );
}
