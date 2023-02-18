import Image from 'next/image';
import { useMemo, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import {
  BackdropCarousel,
  CarouselWrapper,
  ChangeImgButton,
  ImageDescription,
} from './wrappers';

export interface imageType {
  path: string;
  country: string;
  region: string;
  date: Date;
  [key: string]: any;
}
interface ImagesCarouselProps {
  images: imageType[];
}

const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const [fakeIndex, setFakeIndex] = useState(0);
  const [actual, setActual] = useState(1);

  const mockedImages = useMemo(() => {
    return images.map((img: imageType, idx: number) => {
      const index =
        idx + fakeIndex >= images.length
          ? idx + fakeIndex - images.length
          : idx + fakeIndex;

      let className;
      if (index === 0) className = 'left';
      else if (index === 1) className = 'center';
      else if (index === 2) className = 'right';
      else className = 'behind';
      return { ...img, className };
    });
  }, [fakeIndex, images]);

  const handleNext = () => {
    if (fakeIndex === 0) setFakeIndex(images.length - 1);
    else setFakeIndex(fakeIndex - 1);

    if (actual === images.length - 1) setActual(0);
    else setActual(actual + 1);
  };

  const handlePrev = () => {
    if (fakeIndex < images.length - 1) setFakeIndex(fakeIndex + 1);
    else setFakeIndex(0);

    if (actual === 0) setActual(images.length - 1);
    else setActual(actual - 1);
  };

  const description = useMemo(() => {
    const imgDate = images[actual]?.date.toLocaleDateString('fr-BE', {
      month: 'long',
      year: 'numeric',
    });

    return `${images[actual]?.region} (${images[actual]?.country}), ${imgDate
      .charAt(0)
      .toUpperCase()}${imgDate.slice(1)}`;
  }, [actual, images]);

  return (
    <CarouselWrapper>
      {mockedImages.map((img: imageType) => {
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

export default ImagesCarousel;
