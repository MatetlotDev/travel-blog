import styled from '@emotion/styled';
import { HistoryNavigation } from 'components';
import { diaryDays } from 'constants/global';
import type { NextPage } from 'next';
import Head from 'next/head';

const Diary: NextPage = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <ContentWrapper>
        <HistoryNavigation
          firstDate={new Date('22/05/2022')}
          lastDate={new Date('12/08/2023')}
        />
        {/* {diaryDays.map(day => )} */}
      </ContentWrapper>
    </>
  );
};

export default Diary;

const ContentWrapper = styled.div`
  margin-left: 130px;
  min-height: 100vh;
`;
