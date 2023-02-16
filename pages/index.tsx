import type { NextPage } from 'next';
import Head from 'next/head';
import About from 'widgets/homepage/about';
import DiscoverImages from 'widgets/homepage/discoverImages';
import Questions from 'widgets/homepage/questions';
import Welcome from 'widgets/homepage/welcome';
import DiscoverArticles from 'widgets/homepage/discoverArticles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Welcome />
      <About />
      <DiscoverImages />
      <Questions />
      <DiscoverArticles />
    </>
  );
};

export default Home;
