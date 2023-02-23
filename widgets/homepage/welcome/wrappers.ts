import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type CircleProps = {
  width: number;
  delay: number;
};

const circleAnim = (width: number) => keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(2 * ${width}deg) scale(1.2);
  }
  50% {
    transform: rotate(11 * ${width}deg) scale(.8);
  }
  75% {
    transform: rotate(20deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

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
  .circles {
    position: absolute;
    transform: translateY(50%);
    bottom: 0;
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: center;

    & > * {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
    }
  }

  ${({ theme }) => theme.breakpoints.extraLarge} {
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 35px;
    }
  }
  ${({ theme }) => theme.breakpoints.large} {
    h1 {
      font-size: 45px;
      text-align: center;
    }
    p {
      font-size: 33px;
      text-align: center;
    }
  }
  ${({ theme }) => theme.breakpoints.medium} {
    h1 {
      font-size: 30px;
      text-align: center;
    }
    p {
      font-size: 23px;
      text-align: center;
    }
  }
`;

export const Circle = styled.div<CircleProps>`
  width: ${({ width }) => width}vw;
  min-width: ${({ width }) => width * 7}px;
  min-height: ${({ width }) => width * 7}px;
  height: ${({ width }) => width}vw;
  border: 1px dashed #fff;
  border-radius: 50%;
  animation: ${({ width }) => circleAnim(width)} 10s linear
    ${({ delay }) => delay}s infinite;
`;
