import Image from 'next/image';
import { useMemo, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import {
  BackdropCarousel,
  CarouselWrapper,
  ChangeImgButton,
  ImageDescription,
} from './wrappers';

interface image {
  path: string;
  country: string;
  region: string;
  date: Date;
  [key: string]: any;
}

const mockedImages: image[] = [
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

const Carousel = () => {
  const [fakeIndex, setFakeIndex] = useState(0);
  const [actual, setActual] = useState(1);

  const images = useMemo(() => {
    return mockedImages.map((img, idx) => {
      const index =
        idx + fakeIndex >= mockedImages.length
          ? idx + fakeIndex - mockedImages.length
          : idx + fakeIndex;

      let className;
      if (index === 0) className = 'left';
      else if (index === 1) className = 'center';
      else if (index === 2) className = 'right';
      else className = 'behind';
      return { ...img, className };
    });
  }, [fakeIndex]);

  const handleNext = () => {
    if (fakeIndex === 0) setFakeIndex(mockedImages.length - 1);
    else setFakeIndex(fakeIndex - 1);

    if (actual === mockedImages.length - 1) setActual(0);
    else setActual(actual + 1);
  };

  const handlePrev = () => {
    if (fakeIndex < mockedImages.length - 1) setFakeIndex(fakeIndex + 1);
    else setFakeIndex(0);

    if (actual === 0) setActual(mockedImages.length - 1);
    else setActual(actual - 1);
  };

  const description = useMemo(() => {
    const imgDate = mockedImages[actual]?.date.toLocaleDateString('fr-BE', {
      month: 'long',
      year: 'numeric',
    });

    return `${mockedImages[actual]?.region} (${
      mockedImages[actual]?.country
    }), ${imgDate.charAt(0).toUpperCase()}${imgDate.slice(1)}`;
  }, [actual]);

  return (
    <CarouselWrapper>
      {images.map((img) => {
        return (
          <div key={img.path} className={`image-wrapper ${img.className}`}>
            <Image
              src={img.path}
              width={350}
              height={510}
              alt="group of people"
            />
          </div>
        );
      })}
      <BackdropCarousel id="backdrop-carousel" />
      <ChangeImgButton onClick={handlePrev} className="left-arrow">
        <SlArrowLeft />
      </ChangeImgButton>
      <ChangeImgButton onClick={handleNext} className="right-arrow">
        <SlArrowRight />
      </ChangeImgButton>
      <ImageDescription>{description}</ImageDescription>
    </CarouselWrapper>
  );
};

export default Carousel;
