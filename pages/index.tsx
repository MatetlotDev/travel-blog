import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SlArrowDown } from 'react-icons/sl';
import {
  About,
  Circle,
  DiscoverSpan,
  HomeWrapper,
  QuoteImage,
  Salut,
} from '../modules/homepage/wrappers';

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
        <p>
          Viens découvrir nos <strong>aventures</strong>...
        </p>
        <DiscoverSpan>
          <span>Découvrir</span>
          <SlArrowDown />
        </DiscoverSpan>
        <Circle width={200} delay={0} />
        <Circle width={400} delay={1} />
        <Circle width={700} delay={2} />
      </HomeWrapper>
      <About>
        <Salut>Salut,</Salut>
        <blockquote>
          &ldquo;Nous c&apos;est Justine et Matthias, on a créé ce blog pour
          t&apos;emmener dans nos voyages et te partager nos expériences.&rdquo;
        </blockquote>
        <QuoteImage>
          <Image src="/homepage/group.jpg" fill alt="group of people" />
        </QuoteImage>
      </About>
    </>
  );
};

export default Home;
