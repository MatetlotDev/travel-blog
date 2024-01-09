'use client';

import styled from '@emotion/styled';
import { pictures } from 'app/constants/global';
import { FiltersWrapper, Header } from 'app/ui';
import { useAppDispatch } from 'hooks';
import Head from 'next/head';
import { useState } from 'react';
import {
  openCarouselFullScreen,
  setImageCarouselFullScreen,
} from 'state/global';
import { dateToSentence } from 'utils/dateToSentence';
import { sortPicturesByCreateDate } from 'utils/sortPictures';

export default function Images() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const picturesFiltered = sortPicturesByCreateDate(pictures);

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <ContentWrapper>
        <FiltersWrapper>
          <div>{/* les filtres de la page viennes ici */}</div>
        </FiltersWrapper>
        <Header withSearchbar />
        {picturesFiltered.map((group) => (
          <PicturesGroup key={group[0].create_date.getTime()}>
            <p>{dateToSentence(group[0].create_date)}</p>
            <div className="pictures">
              {group.map((picture) => (
                <ImageWrapper
                  onClick={() => {
                    dispatch(setImageCarouselFullScreen({ image: picture }));
                    dispatch(openCarouselFullScreen());
                  }}
                  key={picture.id}
                  url={picture.url}
                />
              ))}
            </div>
          </PicturesGroup>
        ))}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  margin-left: 130px;
  min-height: 100vh;
`;

const PicturesGroup = styled.div`
  margin-bottom: 50px;

  p {
    margin-bottom: 15px;
  }

  .pictures {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ImageWrapper = styled.div<{ url: string }>`
  background: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: all 0.5s;
  cursor: pointer;
`;
