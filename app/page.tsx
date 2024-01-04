'use client';

import Head from 'next/head';
import About from './components/about';
import DiscoverArticles from './components/discoverArticles';
import DiscoverImages from './components/discoverImages';
import Questions from './components/questions';
import Welcome from './components/welcome';

export default function NextPage() {
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
}
