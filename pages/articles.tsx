import styled from '@emotion/styled';
import { FiltersWrapper } from 'components';
import { categories } from 'constants/global';
import { useAppSelector } from 'hooks';
import type { NextPage } from 'next';
import Head from 'next/head';
import { articlesSelector } from 'state/articles';
import Category from 'widgets/articles/category';

const Articles: NextPage = () => {
  const { isSearching } = useAppSelector(articlesSelector);

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <ContentWrapper>
        <HeaderWithSearch />
        <FiltersWrapper>
          <div>{/* just pour attendre de le remplir */}</div>
        </FiltersWrapper>
        {!isSearching ? (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <div>
            {/** display the title "recherche" with the category filtered */}
          </div>
        )}
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
