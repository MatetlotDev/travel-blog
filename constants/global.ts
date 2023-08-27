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
export { XS_SCREEN, S_SCREEN, M_SCREEN, L_SCREEN, XL_SCREEN, XXL_SCREEN };

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
