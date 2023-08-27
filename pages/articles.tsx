import styled from '@emotion/styled';
import FiltersWrapper from 'components/FiltersWrapper';
import type { NextPage } from 'next';
import Head from 'next/head';

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <HeaderWithSearch />
      <FiltersWrapper>
        <div></div>
      </FiltersWrapper>
    </>
  );
};

export default Articles;

const HeaderWithSearch = styled.div`
  height: 10vh;
`;
