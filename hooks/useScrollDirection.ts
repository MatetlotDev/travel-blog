import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const getScrollDirection = (
  currentScrollY: number,
  prevScrollY: number
): ScrollDirection => {
  if (currentScrollY > prevScrollY) {
    return 'down';
  } else if (currentScrollY < prevScrollY) {
    return 'up';
  } else {
    return null;
  }
};

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDirection = getScrollDirection(currentScrollY, prevScrollY);
      setScrollDirection(scrollDirection);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return scrollDirection;
};
