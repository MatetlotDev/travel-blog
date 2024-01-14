'use client';

import { Picture } from 'app/constants/global';
import { useAppDispatch } from 'hooks';
import {
  openCarouselFullScreen,
  setImageCarouselFullScreen,
} from 'state/global';
import styles from '../style.module.scss';

interface Props {
  picture: Picture;
}

export default function ImageWrapper(props: Props) {
  const { picture } = props;

  const dispatch = useAppDispatch();

  return (
    <div
      className={styles['image-wrapper']}
      style={{ backgroundImage: `url(${picture.url})` }}
      onClick={() => {
        dispatch(setImageCarouselFullScreen({ image: picture }));
        dispatch(openCarouselFullScreen());
      }}
      key={picture.id}
    />
  );
}
