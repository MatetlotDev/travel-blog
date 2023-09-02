import styled from '@emotion/styled';
import { Header, HistoryNavigation } from 'components';
import { diaryDays } from 'constants/global';
import type { NextPage } from 'next';
import Head from 'next/head';
import DiaryDay from 'widgets/journal/DiaryDay';

const Diary: NextPage = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <ContentWrapper>
        <Header withSearchbar={false} />
        <HistoryNavigation
          firstDate={new Date('22/05/2022')}
          lastDate={new Date('12/08/2023')}
        />
        {diaryDays.map((day) => (
          <DiaryDay key={day.id} day={day} />
        ))}
      </ContentWrapper>
    </>
  );
};

export default Diary;

const ContentWrapper = styled.div`
  margin-left: 30px;
  min-height: 100vh;
`;
