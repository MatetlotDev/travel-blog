import { DiaryDay as DiaryType } from '@/app/types';
import { getPaginatedDiaries } from '@/app/(actions)/diary';
import styles from '@/app/diary/style.module.scss';
import Head from 'next/head';
import Main from './diary/components/Main';

export default async function Diary() {
  const diaries = (await getPaginatedDiaries('init')) as DiaryType[];

  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <div className={styles.wrapper}>
        <Main diaries={diaries} />
      </div>
    </>
  );
}
