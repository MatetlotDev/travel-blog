import { HistoryNavigation } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Diary: NextPage = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <HistoryNavigation
        firstDate={new Date('22/05/2022')}
        lastDate={new Date('12/08/2023')}
      />
    </>
  );
};

export default Diary;
