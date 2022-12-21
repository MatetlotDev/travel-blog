import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <HomeWrapper>
        <h1>
          Un blog de <strong>voyages</strong> et d&apos;
          <strong>escalade</strong>.
        </h1>
        <span>
          Viens découvrir nos <strong>aventures</strong>...
        </span>
        <Blur color="#000" height="100px" width="300px" />
      </HomeWrapper>
    </>
  );
};

export default Home;

type BlurProps = {
  color: string;
  width: string;
  height: string;
};

const HomeWrapper = styled.section`
  background-image: url('/homepage/boat.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-weight: 300;
    font-size: 62px;
    margin-bottom: 3vh;
  }
  strong {
    font-style: italic;
    font-weight: 400;
  }
  span {
    font-size: 52px;
    font-weight: 300;
  }
`;

const Blur = styled.div<BlurProps>`
  background: ${({ color }) => color};
  filter: blur(90px);
  position: absolute;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
