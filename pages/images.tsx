import styled from '@emotion/styled';
import { FiltersWrapper, Header } from 'components';
import { pictures } from 'constants/global';
import { useAppDispatch } from 'hooks';
import addData from '../firebase/storage/addData';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import {
  openCarouselFullScreen,
  setImageCarouselFullScreen,
} from 'state/global';
import { dateToSentence } from 'utils/dateToSentence';
import { sortPicturesByCreateDate } from 'utils/sortPictures';

const Images: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const picturesFiltered = sortPicturesByCreateDate(pictures);

  const handle = async () => {
    console.log('click');

    const data = {
      name: 'John snow',
      house: 'Stark',
    };

    const { result, error } = await addData('users', 'user-id', data);

    console.log('result : ', result);

    if (error) {
      return console.log(error);
    }
  };

  const Test = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    cursor: pointer;
  `;

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <ContentWrapper>
        <Test onClick={handle} />
        <FiltersWrapper>{/* filters come here */}</FiltersWrapper>
        <Header
          withSearchbar
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
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
};

export default Images;

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
