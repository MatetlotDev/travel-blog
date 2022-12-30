import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import { menuImages, routes } from 'constants/global';
import { useAppSelector } from 'hooks';
import { globalSelector } from 'state/global';

const Menu: NextPage = () => {
  const { actualPage } = useAppSelector(globalSelector);
  const [open, setOpen] = useState(false);
  const [actualPic, setActualPic] = useState(0);
  const [actualRoute, setActualRoute] = useState(actualPage);
  // const [actualPage, setActualPage] = useState('index');npm run

  useEffect(() => {
    if (open && actualPage === 'index') {
      // Trigger open menu
    } else {
      // trigger close menu
    }
  }, [open, actualPage]);

  const handleToggleMenu = () => {
    if (open) {
      setOpen(false);
      gsap.to('.arrow-icon', {
        rotation: 0,
      });
      gsap.to('#menu-content', 0.5, {
        y: 0,
        transformOrigin: '0 50%',
      });
    } else {
      setOpen(true);
      gsap.to('.arrow-icon', {
        rotation: 180,
      });
      gsap.to('#menu-content', 0.5, {
        y: '100vh',
        transformOrigin: '0 50%',
      });
    }
  };

  const handleMouseOver = (route: string) => {
    setActualRoute(route);
    if (actualPic === 5) setActualPic(0);
    else setActualPic(actualPic + 1);
  };

  const imageRender = () => {
    const random1 = Math.round((Math.random() - 0.5) * 4);
    const random2 = Math.round((Math.random() - 0.5) * 4);
    const random3 = Math.round((Math.random() - 0.5) * 4);
    return (
      <Images key={menuImages[actualPic].src} className="actual-pic">
        <ImageWrapper
          random1={random1}
          random2={random2}
          random3={random3}
          id="image-wrapper-menu"
        >
          <Image src={menuImages[actualPic].src} alt="menu-img" fill />
        </ImageWrapper>
        <ImageLegend>
          <CiLocationOn className="location-icon" />
          {menuImages[actualPic].location}
        </ImageLegend>
      </Images>
    );
  };

  return (
    <>
      <MenuContent id="menu-content">
        <LeftContent>
          <h3>
            {routes.filter((route) => route.label === actualRoute)[0].caption}
          </h3>
          {imageRender()}
        </LeftContent>
        <ListWrapper>
          {routes.map(
            (route) =>
              !route.admin && (
                <li
                  onMouseOver={() => handleMouseOver(route.label)}
                  key={route.name}
                >
                  <Link href={route.path} onClick={handleToggleMenu}>
                    {route.name}
                  </Link>
                </li>
              )
          )}
        </ListWrapper>
      </MenuContent>
      <MenuNavbar open={open}>
        <ToggleMenuWrapper onClick={handleToggleMenu}>
          <span>Menu</span>
          <SlArrowDown className="arrow-icon" />
        </ToggleMenuWrapper>
      </MenuNavbar>
    </>
  );
};

export default Menu;

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

const MenuNavbar = styled.div<MenuNavBarProps>`
  color: ${({ theme }) => theme.colors.secondary.main};
  background: ${({ open, theme }) => (open ? theme.colors.primary.main : '')};
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  min-height: 12vh;
  transition: background-color 0.2s;

  span {
    font-size: 4.7rem;
    margin-right: 2rem;
    font-weight: 200;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
  .arrow-icon {
    font-size: 2.5rem;
  }
`;
const MenuContent = styled.div`
  height: 88vh;
  position: absolute;
  z-index: 998;
  top: -88vh;
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: 100vw;
  display: flex;
  padding: 3vh 20vw;
`;
const ToggleMenuWrapper = styled.div`
  padding: 20px 50px;
  cursor: pointer;
`;
const LeftContent = styled.div`
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
const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const ImageWrapper = styled.div<ImageWrapperProps>`
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
const ImageLegend = styled.span`
  font-size: 1.7rem;
  font-weight: 100;
  display: flex;
  align-items: center;

  .location-icon {
    margin-right: 0.5vh;
  }
`;
const ListWrapper = styled.ul`
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
