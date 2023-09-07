import styled from '@emotion/styled';
import { FiltersWrapper, Header } from 'components';
import { pictures } from 'constants/global';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { sortPicturesByCreateDate } from 'utils/sortPictures';

const Images: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const picturesFiltered = sortPicturesByCreateDate(pictures);

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <ContentWrapper>
        <FiltersWrapper>{/* filters come here */}</FiltersWrapper>
        <Header
          withSearchbar
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        {picturesFiltered.map((group) => (
          <PicturesGroup key={group[0].create_date.getTime()}>
            <p>
              {group[0].create_date
                .toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
                .split(' ')
                .map(
                  (e) =>
                    `${e.slice(0, 1).toUpperCase()}${e.slice(1).toLowerCase()}`
                )
                .join(' ')}
            </p>
            <div className="pictures">
              {group.map((picture) => (
                <ImageWrapper key={picture.id} url={picture.url} />
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
