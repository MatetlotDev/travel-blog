import { ArticleCarousel, articleType, Button } from 'components';
import { MainWrapper, Text } from './wrappers';

const homepageArticles: articleType[] = [
  {
    id: 1,
    read_time: 25,
    title: "L'isolation en van",
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu2.jpg',
    date: new Date('02/22/2021'),
  },
  {
    id: 2,
    read_time: 5,
    title: 'L’électricité en fourgon amménagé',
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu3.jpg',
    date: new Date('02/22/2021'),
  },
  {
    id: 3,
    read_time: 15,
    title: 'Comment optimiser l’espace ?',
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu4.jpg',
    date: new Date('02/22/2021'),
  },
  {
    id: 4,
    read_time: 35,
    title: "L'isolation en van",
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu5.jpg',
    date: new Date('02/22/2021'),
  },
  {
    id: 5,
    read_time: 10,
    title: 'Comment optimiser l’espace en van ?',
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu6.jpg',
    date: new Date('02/22/2021'),
  },
  {
    id: 6,
    read_time: 55,
    title: 'L’électricité en fourgon amménagé',
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu7.jpg',
    date: new Date('02/22/2021'),
  },
  {
    id: 7,
    read_time: 75,
    title: "L'isolation en van",
    description:
      'Choisir la bonne isolation pour son van est une décision clé si on veux pouvoir économiser de l’énergie en se réchauffant et e...',
    img_preview: '/menu/menu8.jpg',
    date: new Date('02/22/2021'),
  },
];

const DiscoverArticles = () => {
  return (
    <MainWrapper>
      <Text>
        <h2>Articles</h2>
        <p>Découvre nos articles et apprend en davantages sur divers sujet.</p>
        <Button link="/articles">Voir tout les articles</Button>
      </Text>
      <ArticleCarousel withBlur articles={homepageArticles} />
    </MainWrapper>
  );
};

export default DiscoverArticles;
