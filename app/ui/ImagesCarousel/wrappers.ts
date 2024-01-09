'use client';

import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  width: 50vw;
  height: 85vmin;
  position: relative;

  .image-wrapper {
    position: absolute;
    transition: all 0.5s;

    img {
      object-fit: cover;
    }
  }

  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;

    &:hover {
      transform: translate(-50%, -50%) rotate(-1deg) scale(1.08);
    }
  }
  .left {
    top: 50%;
    left: 10%;
    transform: translateY(-50%) scale(0.8) rotate(-2deg);
    z-index: 8;
  }
  .right {
    top: 50%;
    right: 10%;
    transform: translateY(-50%) scale(0.8) rotate(2deg);
    z-index: 8;
  }
  .behind {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.01);
    opacity: 0;
    z-index: 7;
  }
`;
export const BackdropCarousel = styled.div`
  z-index: 9;
  width: 500px;
  height: 300px;
  background: black;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(150px);
  transition: opacity 0.25s;
`;
export const ChangeImgButton = styled.button`
  border: 1px dashed ${({ theme }) => theme.colors.white.main};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.white.main};
  background: none;
  border-radius: 50%;
  padding: 20px;
  font-size: 2.5rem;
  z-index: 11;
  width: 67px;
  height: 67px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.white.main};
    color: ${({ theme }) => theme.colors.black.main};
    border-color: ${({ theme }) => theme.colors.black.main};
    opacity: 0.7;
  }

  &.left-arrow {
    left: 24%;
  }
  &.right-arrow {
    right: 24%;
  }
`;
export const ImageDescription = styled.p`
  position: absolute;
  bottom: 5%;
  left: 25%;
  z-index: 10;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 5px;
  }
`;
