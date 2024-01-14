import { pictures } from 'app/constants/global';
import { FiltersWrapper, Header } from 'app/ui';
import Head from 'next/head';
import { dateToSentence } from 'utils/dateToSentence';
import { sortPicturesByCreateDate } from 'utils/sortPictures';
import ImageWrapper from './components/image';
import styles from './style.module.scss';

export default function Images() {
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
            <div className={styles.pictures}>
              {group.map((picture) => (
                <ImageWrapper key={picture.id} picture={picture} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
