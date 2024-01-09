'use client';

import { mockedArticles } from 'app/constants/global';
import { ArticleCarousel, Button } from 'app/ui';
import { MainWrapper, Text } from './wrappers';

const DiscoverArticles = () => {
  return (
    <MainWrapper>
      <Text>
        <h2>Articles</h2>
        <p>Découvre nos articles et apprend en davantages sur divers sujet.</p>
        <Button link="/articles">Voir tout les articles</Button>
      </Text>
      <ArticleCarousel withBlur articles={mockedArticles} />
    </MainWrapper>
  );
};

export default DiscoverArticles;
