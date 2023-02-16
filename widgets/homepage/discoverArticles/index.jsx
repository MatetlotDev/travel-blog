import { ArticleCarousel, Button } from 'components';
import { Blur } from 'styles/globals';
import { MainWrapper, Text } from './wrappers';

const homepageArticles = [
  {
    id: 1,
    read_time: 5,
    title: "L'isolation en van",
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    date: new Date('22/02/2021'),
  },
];

const DiscoverArticles = () => {
  return (
    <MainWrapper>
      <Text>
        <h2>Articles</h2>
        <p>Découvre nos articles et apprend en davantages sur divers sujet.</p>
        <Button link="/articles">Voir tout les articles</Button>
        <Blur />
      </Text>
      <ArticleCarousel articles={homepageArticles} />
    </MainWrapper>
  );
};

export default DiscoverArticles;
