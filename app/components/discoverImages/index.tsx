'use client';

import { Button, imageType, ImagesCarousel } from 'components';
import { DiscoverImagesContainer, Texts } from './wrappers';

const images: imageType[] = [
  {
    path: '/menu/menu1.jpg',
    country: 'Italie',
    region: 'Dolomites',
    date: new Date('2022-03-25'),
  },
  {
    path: '/menu/menu2.jpg',
    country: 'Suisse',
    region: 'Valais',
    date: new Date('2022-12-05'),
  },
  {
    path: '/menu/menu3.jpg',
    country: 'Sicile',
    region: 'Sicile',
    date: new Date('2022-02-09'),
  },
  {
    path: '/menu/menu4.jpg',
    country: 'France',
    region: 'Jura',
    date: new Date('2021-01-20'),
  },
  {
    path: '/menu/menu5.jpg',
    country: 'France',
    region: 'Hautes-savoies',
    date: new Date('2022-03-25'),
  },
  {
    path: '/menu/menu6.jpg',
    country: 'Suisse',
    region: 'Valais',
    date: new Date('2022-12-05'),
  },
  {
    path: '/menu/menu7.jpg',
    country: 'Sicile',
    region: 'Sicile',
    date: new Date('2022-02-09'),
  },
  {
    path: '/menu/menu8.jpg',
    country: 'France',
    region: 'Jura',
    date: new Date('2021-01-20'),
  },
  {
    path: '/menu/menu9.jpg',
    country: 'France',
    region: 'Hautes-savoies',
    date: new Date('2022-03-25'),
  },
];

const DiscoverImages = () => (
  <DiscoverImagesContainer>
    <Texts>
      <h2>Découvre nos images de voyages</h2>
      <p>
        Parcours notre galerie d’image et inspire toi pour tes prochaines
        aventures.
      </p>
      <Button link="/images">Parcourir les images</Button>
    </Texts>
    <ImagesCarousel images={images} />
  </DiscoverImagesContainer>
);

export default DiscoverImages;
