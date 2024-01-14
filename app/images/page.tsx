'use client';

import { pictures } from 'app/constants/global';
import { FiltersWrapper, Header } from 'app/ui';
import { useAppDispatch } from 'hooks';
import Head from 'next/head';
import {
  openCarouselFullScreen,
  setImageCarouselFullScreen,
} from 'state/global';
import { dateToSentence } from 'utils/dateToSentence';
import { sortPicturesByCreateDate } from 'utils/sortPictures';
import styles from './style.module.scss';

export default function Images() {
  const dispatch = useAppDispatch();

  const picturesFiltered = sortPicturesByCreateDate(pictures);

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <div className={styles.wrapper}>
        <FiltersWrapper>
          <div>{/* les filtres de la page viennes ici */}</div>
        </FiltersWrapper>
        <Header withSearchbar />
        {picturesFiltered.map((group) => (
          <div
            className={styles['pictures-group']}
            key={group[0].create_date.getTime()}
          >
            <p>{dateToSentence(group[0].create_date)}</p>
            <div className="pictures">
              {group.map((picture) => (
                <div
                  className={styles['image-wrapper']}
                  style={{ backgroundImage: `url(${picture.url})` }}
                  onClick={() => {
                    dispatch(setImageCarouselFullScreen({ image: picture }));
                    dispatch(openCarouselFullScreen());
                  }}
                  key={picture.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
