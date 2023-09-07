import Image from 'next/image';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import { Wrapper } from './wrappers';

const CarouselFullScreen = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="header">
          <p className="date">Vendredi 20 Septembre 2021</p>
          <div className="location">
            <FaLocationDot />
            <p>Gorges du Verdon</p>
          </div>
        </div>
        <Image src="/menu/menu1.jpg" alt="nope" className="image" />
        <p className="description">
          Matthias sur le toit du van, devant les gorges du verdon.
        </p>
      </div>
      <div className="close">
        <TfiClose />
      </div>
      <div className="more">
        <BiDotsHorizontalRounded />
      </div>
      <div className="prev-button">
        <button>
          <SlArrowLeft />
        </button>
      </div>
      <div className="next-button">
        <button>
          <SlArrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default CarouselFullScreen;
