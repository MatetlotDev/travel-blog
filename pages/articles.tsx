import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Articles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Title>Articles</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut
        laborum commodi? Similique molestiae consequatur, ut ratione eum atque
        blanditiis obcaecati dolorem. Ab officiis veritatis, ut numquam
        praesentium eos sunt!
      </Paragraph>
    </>
  );
};

export default Articles;

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
