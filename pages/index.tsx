import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Title = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return <Title>Hello world !</Title>;
};

export default Home;
