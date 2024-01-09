import { useAppDispatch, useAppSelector } from 'hooks';
import Image from 'next/image';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import { TiLocation } from 'react-icons/ti';
import {
  closeCarouselFullScreen,
  globalSelector,
  setImageCarouselFullScreen,
} from 'state/global';
import { dateToSentence } from 'utils/dateToSentence';
import { Wrapper } from './wrappers';

const CarouselFullScreen = () => {
  const dispatch = useAppDispatch();

  const {
    carouselFullScreen: { open, image },
  } = useAppSelector(globalSelector);

  if (open && image)
    return (
      <Wrapper open={open}>
        <div className="content">
          <div className="header">
            <p className="date">{dateToSentence(image?.create_date)}</p>
            {image.location.adress && (
              <div className="location">
                <TiLocation size={15} />
                <p>{image.location.adress}</p>
              </div>
            )}
          </div>
          <Image
            src={image.url}
            alt={image.description || 'Same image but bigger'}
            className="image"
            fill
          />
          <p className="description">{image.description}</p>
        </div>
        <div
          className="close"
          onClick={() => {
            dispatch(closeCarouselFullScreen());
            dispatch(setImageCarouselFullScreen({ image: null }));
          }}
        >
          <TfiClose />
        </div>
        <div className="more">
          <BiDotsHorizontalRounded />
        </div>
        <div className="prev button">
          <button>
            <SlArrowLeft />
          </button>
        </div>
        <div className="next button">
          <button>
            <SlArrowRight />
          </button>
        </div>
      </Wrapper>
    );
  return null;
};

export default CarouselFullScreen;
