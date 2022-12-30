import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SlArrowDown } from 'react-icons/sl';
import {
  About,
  CardsGroup,
  Circle,
  Discover,
  DiscoverCard,
  DiscoverSpan,
  HomeWrapper,
  QuoteImage,
  Salut,
  ImageDiv,
} from 'widgets/homepage/wrappers';

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
        <Discover>
          <h3>Découvrir</h3>
          <CardsGroup>
            <DiscoverCard href="/articles">
              <ImageDiv url="/menu/menu1.jpg" />
              <span>Articles</span>
            </DiscoverCard>
            <DiscoverCard href="/map-monde">
              <ImageDiv url="/menu/menu2.jpg" />
              <span>Carte du monde</span>
            </DiscoverCard>
            <DiscoverCard href="/journal">
              <ImageDiv url="/menu/menu3.jpg" />
              <span>Journal</span>
            </DiscoverCard>
            <DiscoverCard href="/images">
              <ImageDiv url="/menu/menu4.jpg" />
              <span>Images</span>
            </DiscoverCard>
          </CardsGroup>
        </Discover>
      </About>
    </>
  );
};

export default Home;
