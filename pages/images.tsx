import styled from '@emotion/styled';
import exifr from 'exifr';
import type { NextPage } from 'next';
import Head from 'next/head';

const Images: NextPage = () => {
  exifr
    .parse('/IMG_20230902_183414.jpg')
    .then((output) => console.log('Camera:', output));

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <ContentWrapper></ContentWrapper>
    </>
  );
};

export default Images;

const ContentWrapper = styled.div`
  margin-left: 30px;
  min-height: 100vh;
`;
