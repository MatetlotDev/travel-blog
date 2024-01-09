'use client';
import styled from '@emotion/styled';
import Link from 'next/link';

// --- QUOTE --- //
export const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Salut = styled.span`
  font-size: 48px;
  margin-left: -52vw;
  margin-top: 315px;
`;
export const BlockquoteWrapper = styled.div`
  width: 70vw;
  background: url('/homepage/group.jpg');
  background-position: center;
  background-size: cover;
  height: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 380px;
  margin-bottom: 380px;
  padding-left: 100px;

  span {
    z-index: 2;
    position: relative;
    display: block;
    font-size: 55px;
    margin-bottom: 180px;
  }
  blockquote {
    font-size: 45px;
    font-weight: 200;
    width: 57%;
    text-align: center;
    margin-bottom: 8vh;
    z-index: 2;
    position: relative;
  }
`;
export const LinearBackground = styled.div`
  position: absolute;
  background: linear-gradient(
    270deg,
    rgba(24, 44, 37, 0) 0.14%,
    rgba(24, 44, 37, 0.784201) 34.3%,
    rgba(24, 44, 37, 0.898771) 46.41%,
    rgba(24, 44, 37, 0.935704) 53.18%,
    #182c25 62.93%
  );
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
`;
export const ProfilePicWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 70vh;
  margin: 3vh 0 6vh 0;

  img {
    object-fit: cover;
  }
`;
