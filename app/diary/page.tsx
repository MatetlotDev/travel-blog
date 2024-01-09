import { diaryDays } from 'app/constants/global';
import { Header, HistoryNavigation } from 'app/ui';
import Head from 'next/head';
import DiaryDay from './components/DiaryDay';
import styles from './style.module.scss';

export default function Diary() {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <div className={styles.wrapper}>
        <Header withSearchbar={false} />
        <HistoryNavigation
          firstDate={new Date('22/05/2022')}
          lastDate={new Date('12/08/2023')}
        />
        {diaryDays.map((day) => (
          <DiaryDay key={day.id} day={day} />
        ))}
      </div>
    </>
  );
}
