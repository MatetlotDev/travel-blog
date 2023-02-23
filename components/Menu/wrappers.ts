import { keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type ImageWrapperProps = {
  random1: number;
  random2: number;
  random3: number;
};

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const backgroundAppear = (theme: Theme) => keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: ${theme.colors.primary.main};
  }
`;

export const MenuNavbar = styled.div`
  color: ${({ theme }) => theme.colors.secondary.main};
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  min-height: 10vh;
  transition: all 0.5s;
  animation: ${({ theme }) => backgroundAppear(theme)} 1s linear 1s forwards;

  span {
    font-size: 3.7rem;
    margin-right: 2rem;
    font-weight: 200;
  }
  .arrow-icon {
    font-size: 1.5rem;
    display: block;
  }
  &.small-menu {
    top: -12vh;
  }
`;
export const MenuContent = styled.div`
  height: 92vh;
  position: fixed;
  z-index: 998;
  top: -92vh;
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 40px 20vw;

  ${({ theme }) => theme.breakpoints.extraExtraLarge} {
    padding: 40px 11vw;
  }
`;
export const ToggleMenuWrapper = styled.div`
  padding: 15px 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const LeftContent = styled.div`
  position: relative;

  h3 {
    font-size: 2.7rem;
    font-weight: 300;
    font-style: italic;
  }
  .actual-pic {
    animation: ${appearAnimation} 0.3s ease-in;
  }
`;
export const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const ImageWrapper = styled.div<ImageWrapperProps>`
  height: 450px;
  width: 320px;
  position: relative;
  margin: 60px 0 40px 60px;

  img {
    object-fit: cover;
    transform: rotate(${({ random1 }) => random1}deg)
      translate(${({ random2 }) => random2}px, ${({ random3 }) => random3}px);
  }

  ${({ theme }) => theme.breakpoints.extraLarge} {
    height: 400px;
    width: 280px;
  }
`;
export const ImageLegend = styled.span`
  font-size: 1.7rem;
  font-weight: 100;
  display: flex;
  align-items: center;

  .location-icon {
    margin-right: 0.5vh;
  }
`;
export const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 60px;

  li {
    margin-bottom: 5vh;
  }
  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black.main};
    font-size: 5rem;
    font-weight: 300;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      background-color: ${({ theme }) => theme.colors.black.main};
      height: 2px;
      bottom: 0;
      left: 0;
      width: 0;
      transition: width 0.5s;
    }
    &:hover {
      font-style: italic;
      font-weight: 200;

      &::after {
        width: 100%;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.extraLarge} {
    li a {
      font-size: 4rem;
    }
  }
`;
