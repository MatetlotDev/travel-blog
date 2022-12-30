import styled from '@emotion/styled';
import Link from 'next/link';

type CircleProps = {
  width: number;
  delay: number;
};

// --- HOME --- //
export const HomeWrapper = styled.section`
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
    text-shadow: 0px 0px 30px #000;
  }
  strong {
    font-style: italic;
    font-weight: 400;
  }
  p {
    font-size: 45px;
    font-weight: 200;
    text-shadow: 0px 0px 24px #000;

    strong {
      font-weight: 300;
    }
  }
`;

export const DiscoverSpan = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1vh;
  font-weight: 300;
`;

export const Circle = styled.div<CircleProps>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border: 1px dashed #fff;
  border-radius: 50%;
  position: absolute;
  transform: translateY(52vh);
`;

// --- QUOTE --- //
export const About = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  align-items: center;

  blockquote {
    font-size: 45px;
    font-weight: 200;
    width: 60%;
    text-align: center;
    margin-bottom: 8vh;
  }
`;
export const Salut = styled.span`
  font-size: 42px;
  margin: 191px 0 108px -96vh;
`;
export const QuoteImage = styled.div`
  position: relative;
  width: 486px;
  height: 326px;
  transform: translateX(21vw) rotate(-2deg);
  margin-bottom: 30vh;

  img {
    object-fit: cover;
  }
`;

// --- Discover --- //
type ImageDivProps = {
  url: string;
};
export const Discover = styled.section`
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const CardsGroup = styled.div`
  display: flex;
`;
export const DiscoverCard = styled(Link)`
  width: 250px;
  height: 250px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white.main};
  font-size: 2.5rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    pointer-events: none;
  }
`;

export const ImageDiv = styled.div<ImageDivProps>`
  background: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.25);
    transition: background 0.3s;
  }

  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.5);
    }
    transform: scale(1.2);
  }
`;

// --- WHO WE ARE --- //
export const WhoWeAre = styled.section`
  margin-top: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 50px;
    font-weight: 100;
    margin: 11vh 0 2vh 0;
  }
  p {
    font-weight: 200;
    font-size: 2.15rem;
    width: 60%;
    text-align: justify;
    margin: 3vh;
    position: relative;
    margin-bottom: 15vh;

    /* content does not accept dynamic props string */
    &::before {
      content: '0';
      position: absolute;
      top: 0;
      left: 0;
      font-size: 15rem;
      font-family: 'Playfair Display', serif;
      opacity: 0.4;
      transform: translate(-50%, -50%);
    }
  }
  p.justine {
    margin-bottom: 25vh;
    &::before {
      content: 'S';
    }
  }
`;
export const ProfilePicWrapper = styled.div`
  position: relative;
  width: 30%;
  height: 90vh;

  img {
    object-fit: cover;
  }
`;
