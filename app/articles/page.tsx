'use client';

import styled from '@emotion/styled';
import { Wrapper } from 'app/articles/components/category/wrappers';
import { ArticleCarousel, FiltersWrapper, Header } from 'components';
import { categories, mockedArticles } from 'constants/global';
import { useAutocomplete } from 'hooks/useAutoComplete';
import Head from 'next/head';
import { useState } from 'react';
import Category from './components/category';

export default function Articles() {
  const [searchValue, setSearchValue] = useState('');

  const [filtered] = useAutocomplete(searchValue, mockedArticles);

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <ContentWrapper>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          withSearchbar
        />
        <FiltersWrapper>
          <div>{/* les filtres de la page viennes ici */}</div>
        </FiltersWrapper>
        {!searchValue ? (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <Wrapper>
            <h2>Résultats</h2>
            {filtered.length ? (
              <ArticleCarousel size="fullwidth" articles={filtered} />
            ) : (
              <h3>Aucun articles trouvé avec &quot;{searchValue}&quot;</h3>
            )}
          </Wrapper>
        )}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  margin-left: 130px;
  min-height: 100vh;
`;
