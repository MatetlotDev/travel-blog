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
  ImageDiv,
  ProfilePicWrapper,
  QuoteImage,
  Salut,
  WhoWeAre,
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
        <WhoWeAre>
          <h2>Qui sommes nous ?</h2>
          <span>Matthias</span>
          <ProfilePicWrapper>
            <Image
              src="/homepage/matthias.jpeg"
              alt="matthias profile picture"
              fill
            />
          </ProfilePicWrapper>
          <p>
            n sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum
            sur un texte générique comme Du texte. Du texte. Du texte. est quil
            possède une distribution de lettres plus ou moins normale, et en
            tout cas comparable avec celle du français standard. De nombreuses
            suites logicielles de mise en page ou éditeurs de sites Web ont fait
            du Lorem Ipsum leur faux texte par défaut, et une recherche pour
            Lorem Ipsum vous conduira vers de nombreux sites qui n&apos;en sont
            encore qu&apos;à leur phase de construction. Plusieurs versions sont
            apparues avec le temps, parfois par accident, souvent
            intentionnellement. n sait depuis longtemps que travailler avec du
            texte lisible et contenant du sens est source de distractions, et
            empêche de se concentrer sur la mise en page elle-même. Lavantage du
            Lorem Ipsum sur un texte générique comme Du texte. Du texte. Du
            texte. est quil possède une distribution de lettres plus ou moins
            normale, et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de
            sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une
            recherche pour Lorem Ipsum vous conduira vers de nombreux sites qui
            n&apos;en sont encore qu&apos;à leur phase de construction.
            Plusieurs versions sont apparues avec le temps, parfois par
            accident, souvent intentionnellement.
          </p>
          <span>Justine</span>
          <ProfilePicWrapper>
            <Image
              src="/homepage/justine.jpeg"
              alt="justine profile picture"
              fill
            />
          </ProfilePicWrapper>
          <p className="justine">
            ait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum
            sur un texte générique comme Du texte. Du texte. Du texte. est quil
            possède une distribution de lettres plus ou moins normale, et en
            tout cas comparable avec celle du français standard. De nombreuses
            suites logicielles de mise en page ou éditeurs de sites Web ont fait
            du Lorem Ipsum leur faux texte par défaut, et une recherche pour
            Lorem Ipsum vous conduira vers de nombreux sites qui n&apos;en sont
            encore qu&apos;à leur phase de construction. Plusieurs versions sont
            apparues avec le temps, parfois par accident, souvent
            intentionnellement. n sait depuis longtemps que travailler avec du
            texte lisible et contenant du sens est source de distractions, et
            empêche de se concentrer sur la mise en page elle-même. Lavantage du
            Lorem Ipsum sur un texte générique comme Du texte. Du texte. Du
            texte. est quil possède une distribution de lettres plus ou moins
            normale, et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de
            sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une
            recherche pour Lorem Ipsum vous conduira vers de nombreux sites qui
            n&apos;en sont encore qu&apos;à leur phase de construction.
            Plusieurs versions sont apparues avec le temps, parfois par
            accident, souvent intentionnellement.
          </p>
        </WhoWeAre>
      </About>
    </>
  );
};

export default Home;
