import { Picture } from '@/app/types';
import Image from 'next/image';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { TfiClose } from 'react-icons/tfi';
import { dateToSentence } from 'utils/dateToSentence';
import styles from './style.module.scss';

const CarouselFullScreen = () => {
  const open = false;
  const image: Picture = {
    id: 1,
    url: '',
    create_date: new Date(),
    location: {
      longitude: 20,
      latitude: 20,
    },
  };

  if (open && image)
    return (
      <div
        className={styles.wrapper}
        style={{ display: open ? 'flex' : 'none' }}
      >
        <div className={styles.content}>
          <div className={styles.header}>
            <p>{dateToSentence(image?.create_date)}</p>
          </div>
          <Image
            src={image.url}
            alt="Same image but bigger"
            className={styles.image}
            fill
          />
        </div>
        <div
          className={styles.close}
          onClick={() => {
            // handle close
          }}
        >
          <TfiClose />
        </div>
        <div className={styles.more}>
          <BiDotsHorizontalRounded />
        </div>
        <div className={`${styles.prev} ${styles.button}`}>
          <button>
            <SlArrowLeft />
          </button>
        </div>
        <div className={`${styles.next} ${styles.button}`}>
          <button>
            <SlArrowRight />
          </button>
        </div>
      </div>
    );
  return null;
};

export default CarouselFullScreen;
