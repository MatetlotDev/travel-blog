import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type MenuNavBarProps = {
  open: boolean;
};
type ImageWrapperProps = {
  random1: number;
  random2: number;
  random3: number;
};

const imageAppear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MenuNavbar = styled.div<MenuNavBarProps>`
  color: ${({ theme }) => theme.colors.secondary.main};
  background: ${({ theme }) => theme.colors.primary.main};
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

  span {
    font-size: 3.7rem;
    margin-right: 2rem;
    font-weight: 200;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
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
  padding: 3vh 20vw;
`;
export const ToggleMenuWrapper = styled.div`
  padding: 15px 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const LeftContent = styled.div`
  position: relative;
  width: inherit;

  h3 {
    font-size: 2.7rem;
    font-weight: 300;
    font-style: italic;
  }
  .actual-pic {
    animation: ${imageAppear} 0.2s ease-in;
  }
`;
export const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const ImageWrapper = styled.div<ImageWrapperProps>`
  height: 56vh;
  width: 19vw;
  position: relative;
  margin: 6vh;

  img {
    object-fit: cover;
    transform: rotate(${({ random1 }) => random1}deg)
      translate(${({ random2 }) => random2}px, ${({ random3 }) => random3}px);
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
`;
