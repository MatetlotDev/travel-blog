import { Article, ArticleCarousel } from 'components';
import { Category as CategoryType } from 'constants/global';
import { Wrapper } from './wrappers';

interface Props {
  category: CategoryType;
}

export default function Category(props: Props) {
  const { category } = props;

  return (
    <Wrapper>
      <h2>{category.name}</h2>
      <ArticleCarousel size="fullwidth" articles={homepageArticles} />
    </Wrapper>
  );
}

const homepageArticles: Article[] = [
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
