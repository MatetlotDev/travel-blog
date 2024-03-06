import { DiaryDay as DiaryType } from '@/app/types';
// import { Header, HistoryNavigation } from 'app/ui';
import { getPaginatedDiaries } from '@/app/actions/diary';
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
        {/* <Header withSearchbar={false} /> */}
        {/* <HistoryNavigation
        // firstDate={new Date('22/05/2022')}
        // lastDate={new Date('12/08/2023')}
        /> */}
        <Main diaries={diaries} />
      </div>
    </>
  );
}
