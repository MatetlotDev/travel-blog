import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type ImageWrapperProps = {
  random1: number;
  random2: number;
  random3: number;
};
type MenuNavBarProps = {
  isAtTop: string;
};

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MenuNavbar = styled.div<MenuNavBarProps>`
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
  background: ${({ theme, isAtTop }) =>
    isAtTop === 'true' ? 'transparent' : theme.colors.primary.main};

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
  ${({ theme }) => theme.breakpoints.medium} {
    justify-content: center;
    text-align: center;
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

    ${({ theme }) => theme.breakpoints.extraLarge} {
      font-size: 2.2rem;
    }
    ${({ theme }) => theme.breakpoints.large} {
      font-size: 2rem;
    }
  }
  .actual-pic {
    animation: ${appearAnimation} 0.3s ease-in;
  }

  ${({ theme }) => theme.breakpoints.medium} {
    display: none;
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
  ${({ theme }) => theme.breakpoints.large} {
    height: 320px;
    width: 220px;
    margin: 60px 0 25px 20px;
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
  ${({ theme }) => theme.breakpoints.large} {
    li a {
      font-size: 3.4rem;
    }
  }
  ${({ theme }) => theme.breakpoints.medium} {
    li a {
      font-size: 4.5rem;
    }
  }
  ${({ theme }) => theme.breakpoints.small} {
    li a {
      font-size: 3rem;
    }
  }
`;
