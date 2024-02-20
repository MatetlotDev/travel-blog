'use client';

import { menuImages, routes } from 'app/constants/global';
import gsap from 'gsap';
import { useScrollDirection } from 'hooks/useScrollDirection';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';
import styles from './style.module.scss';

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const [actualPic, setActualPic] = useState<number>(0);
  const [actualRoute, setActualRoute] = useState<string>('');
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) setIsAtTop(false);
      else setIsAtTop(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [open]);

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
      <div
        key={menuImages[actualPic].src}
        className={`${styles['actual-pic']} ${styles.images}`}
      >
        <div
          className={styles['image-wrapper']}
          style={{
            transform: `rotate(${random1}deg) translate(${random2}px, ${random3}px`,
          }}
          id="image-wrapper-menu"
        >
          <Image src={menuImages[actualPic].src} alt="menu-img" fill />
        </div>
        <span className={styles['image-legend']}>
          <CiLocationOn className={styles['location-icon']} />
          {menuImages[actualPic].location}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className={styles['menu-content']} id="menu-content">
        <div className={styles['left-content']}>
          <h3>
            {routes.filter((route) => route.label === actualRoute)[0]?.caption}
          </h3>
          {imageRender()}
        </div>
        <ul className={styles['list-wrapper']}>
          {routes.map(
            (route) =>
              !route.admin && (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    onMouseOver={() => handleMouseOver(route.label)}
                    onClick={handleToggleMenu}
                  >
                    {route.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
      <div
        id="menu-navbar"
        className={`${styles['nav-bar']} ${
          scrollDirection === 'down' ? styles['small-menu'] : ''
        }`}
        style={{ backgroundColor: isAtTop ? 'transparent' : '' }}
      >
        <div className={styles['toggle-wrapper']} onClick={handleToggleMenu}>
          <span>Menu</span>
          <SlArrowDown className={styles['arrow-icon']} />
        </div>
      </div>
    </>
  );
}
