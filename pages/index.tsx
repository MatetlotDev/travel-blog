import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Image style={{ width: '100vw', height: '100vh' }} src="/home2.jpg" alt='home' height={100} width={100} />
    </>
  );
};

export default Home;

const Title = styled.h1`
  background: ${({ theme: { colors } }) => colors.primary.main};
  color: ${({
    theme: {
      colors: { secondary },
    },
  }) => secondary[80]};
  font-size: 47px;
  font-weight: 200;
`;
const Paragraph = styled.p`
  font-style: italic;
  font-weight: 100;
`;
