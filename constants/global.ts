import { Article } from 'components';
export const routes = [
  {
    name: 'Accueil',
    label: 'accueil',
    path: '/',
    caption: 'Un petit peu à propos de nous.',
  },
  {
    name: 'Articles',
    label: 'articles',
    path: '/articles',
    caption: 'Des articles sur nos expériences.',
  },
  {
    name: 'Carte du Monde',
    label: 'map-monde',
    path: '/map-monde',
    caption: 'Tout les endroits visités.',
  },
  {
    name: 'Journal',
    label: 'journal',
    path: '/journal',
    caption: 'Notre journal quotidien.',
  },
  {
    name: 'Images',
    label: 'images',
    path: '/images',
    caption: 'Toutes nos images de voyages.',
  },
  { name: 'Admin', label: 'admin', path: '/admin', admin: true },
];

export const menuImages = [
  { location: 'Dolomites, Italy', src: '/menu/menu1.jpg' },
  { location: 'Melbourne, Australia', src: '/menu/menu2.jpg' },
  { location: 'Auckland, New Zealand', src: '/menu/menu3.jpg' },
  { location: 'Gorges du verdon, France', src: '/menu/menu4.jpg' },
  { location: 'Ceuse, France', src: '/menu/menu5.jpg' },
  { location: 'Finale Ligure, Italy', src: '/menu/menu6.jpg' },
  { location: 'Liège, Belgique', src: '/menu/menu7.jpg' },
  { location: 'Berdorf, Luxembourg', src: '/menu/menu8.jpg' },
  { location: 'Freyr, Belgique', src: '/menu/menu9.jpg' },
  { location: 'Bomal, Belgique', src: '/menu/menu10.jpg' },
  { location: 'Gorge du Tarn, France', src: '/menu/menu11.jpg' },
];

const XS_SCREEN = 320;
const S_SCREEN = 480;
const M_SCREEN = 768;
const L_SCREEN = 992;
const XL_SCREEN = 1200;
const XXL_SCREEN = 1600;
export { L_SCREEN, M_SCREEN, S_SCREEN, XL_SCREEN, XS_SCREEN, XXL_SCREEN };

export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [
  {
    id: 'escalade',
    name: 'Escalade',
  },
  {
    id: 'vie-en-van',
    name: 'Vie en van',
  },
  {
    id: 'montagne',
    name: 'Montagne',
  },
];

export const mockedArticles: Article[] = [
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
