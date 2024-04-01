'use client';

import { categories, mockedArticles } from '@/constants/global';
import { ArticleCarousel, FiltersWrapper, Header } from 'app/ui';
import { useAutocomplete } from 'hooks/useAutoComplete';
import Head from 'next/head';
import { useState } from 'react';
import Category from './components/category';
import styles from './style.module.scss';

export default function Articles() {
  const [searchValue, setSearchValue] = useState('');

  const [filtered] = useAutocomplete(searchValue, mockedArticles);

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <div className={styles.content}>
        <Header withSearchbar />
        <FiltersWrapper>
          <div>{/* les filtres de la page viennes ici */}</div>
        </FiltersWrapper>
        {!searchValue ? (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <div className={styles.wrapper}>
            <h2>Résultats</h2>
            {filtered.length ? (
              <ArticleCarousel size="fullwidth" articles={filtered} />
            ) : (
              <h3>Aucun articles trouvé avec &quot;{searchValue}&quot;</h3>
            )}
          </div>
        )}
      </div>
    </>
  );
}
