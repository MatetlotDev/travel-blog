import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const hoverDuration = 0.55;
const articlePreviewWidth = 327;
const articlePreviewMarginRight = 40;

interface ImageDivProps {
  url: string;
}
interface OuterWrapperProps {
  withBlur: boolean;
}
interface CarouselBtnProps {
  display: string;
}
interface InnerWrapperProps {
  position: number;
}

// --- Used multiple times --- //
const circleDashedOuter = css`
  border: 1px dashed white;
  border-radius: 50%;
  color: black;
`;
const carouselButton = css`
  ${circleDashedOuter}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;

  button {
    padding: 20px;
    border: none;
    border-radius: 50%;
    margin: 8px;
    display: flex;
    font-size: 1.4rem;
    position: relative;
    cursor: pointer;
    background: white;
    transition: all 0.3s;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0%;
      bottom: 0;
      right: 0;
      background-color: black;
      border-radius: 50%;
      filter: blur(10px);
      z-index: -1;
    }
  }

  &:hover {
    button {
      &::after {
        filter: blur(15px);
      }
    }
  }

  &:active {
    button {
      background: #e8e8e8;
    }
  }
`;

// --- WRAPPER --- //
export const OuterWrapper = styled.div<OuterWrapperProps>`
  width: 62vw;
  overflow: hidden;
  display: flex;
  position: relative;

  &::before {
    content: '';
    width: 100px;
    position: absolute;
    left: -9%;
    transform: translateX(50%);
    top: -40px;
    bottom: -40px;
    z-index: 3;
    background: ${({ theme }) => theme.colors.primary.main};
    filter: blur(19px);
  }
`;
export const InnerWrapper = styled.div<InnerWrapperProps>`
  display: flex;
  margin-left: 5vw;
  transform: ${({ position }) =>
    `translateX(-${Math.round(
      position * articlePreviewWidth + articlePreviewMarginRight
    )}px)`};
  transition: all 1s;
`;
export const PrevButton = styled.div<CarouselBtnProps>`
  ${carouselButton}
  display: ${({ display }) => (display === 'true' ? 'flex' : 'none')};
  left: 100px;
`;
export const NextButton = styled.div<CarouselBtnProps>`
  ${carouselButton}
  display: ${({ display }) => (display === 'true' ? 'flex' : 'none')};
  right: 30px;
`;

// --- ARTICLE PREVIEW --- //
export const ArticlePreviewWrapper = styled(Link)`
  min-width: ${articlePreviewWidth}px;
  height: 583px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white.main};
  margin-right: ${articlePreviewMarginRight}px;

  .content {
    z-index: 1;
    padding: 20px;

    h6 {
      margin: 0 15px;
    }
    .date {
      font-size: 1.6rem;
      font-weight: 400;
      margin: 15px;
      display: block;
    }
    p {
      font-size: 1.7rem;
      margin-bottom: 15px;
    }
  }

  &:hover {
    .img-div {
      transform: scale(1.05);
    }
    .line {
      width: 55%;
    }
  }
`;
export const ImageDiv = styled.div<ImageDivProps>`
  width: 100%;
  height: 100%;
  background: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  transition: all ${hoverDuration}s;
  position: absolute;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 1);
    filter: blur(120px);
    width: 90%;
    height: 40%;
  }
`;
export const ReadingTime = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  ${circleDashedOuter}

  .center {
    background: ${({ theme }) => theme.colors.white.main};
    border-radius: 50%;
    margin: 5px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.6rem;
  }
  span {
    font-size: 1.15rem;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;

  .line {
    margin-left: 15px;
    height: 1px;
    background: ${({ theme }) => theme.colors.white.main};
    width: 50%;
    transition: all ${hoverDuration}s;
  }
  .read {
    margin: 0 5px 0 10px;
    font-size: 1.25rem;
  }
`;
