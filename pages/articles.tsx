import styled from '@emotion/styled';
import { FiltersWrapper } from 'components';
import { categories } from 'constants/global';
import type { NextPage } from 'next';
import Head from 'next/head';
import Category from 'widgets/articles/category';

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <ContentWrapper>
        <HeaderWithSearch />
        <FiltersWrapper>
          <div></div>
        </FiltersWrapper>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ContentWrapper>
    </>
  );
};

export default Articles;

const HeaderWithSearch = styled.div`
  height: 10vh;
`;

const ContentWrapper = styled.div`
  margin-left: 130px;
`;
