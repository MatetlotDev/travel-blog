import { menuImages, routes } from 'constants/global';
import gsap from 'gsap';
import { useAppSelector } from 'hooks';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';
import { globalSelector } from 'state/global';
import {
  ImageLegend,
  Images,
  ImageWrapper,
  LeftContent,
  ListWrapper,
  MenuContent,
  MenuNavbar,
  ToggleMenuWrapper,
} from './wrappers';

const Menu: NextPage = () => {
  const { actualPage } = useAppSelector(globalSelector);
  const [open, setOpen] = useState(false);
  const [actualPic, setActualPic] = useState(0);
  const [actualRoute, setActualRoute] = useState(actualPage);

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
