import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { useAppSelector } from '../../hooks';
import { globalSelector } from '../../redux/global';

const Menu: NextPage = () => {
  const { actualPage } = useAppSelector(globalSelector);
  const [open, setOpen] = useState(false);
  // const [actualPage, setActualPage] = useState('index');

  useEffect(() => {
    if (open && actualPage === 'index') {
      // Trigger open menu
    } else {
      // trigger close menu
    }
  }, [open, actualPage]);

  return (
    <>
      <MenuNavbar>
        <ToggleMenuWrapper onClick={() => setOpen(!open)}>
          <span>Menu</span>
          <SlArrowDown className="arrow-icon" />
        </ToggleMenuWrapper>
      </MenuNavbar>
      <MenuWrapper open={open}>
        <ImageWrapper>
          <StyledImage src="url" alt="description" />
          <ImageLegend></ImageLegend>
        </ImageWrapper>
        <ListWrapper>
          <ListElement>
            <Link href="/">Acceuil</Link>
          </ListElement>
          <ListElement>
            <Link href="/articles">Articles</Link>
          </ListElement>
          <ListElement>
            <Link href="/journal">Journal</Link>
          </ListElement>
          <ListElement>
            <Link href="/map-monde">Map Monde</Link>
          </ListElement>
          <ListElement>
            <Link href="images">Images</Link>
          </ListElement>
        </ListWrapper>
      </MenuWrapper>
    </>
  );
};

export default Menu;

type MenuWrapperProps = {
  open: boolean;
};

const MenuNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white.main};

  span {
    font-size: 3.5rem;
    margin-right: 2rem;
  }
  .arrow-icon {
    font-size: 2.5rem;
  }
`;
const ToggleMenuWrapper = styled.div``;
const MenuWrapper = styled.div<MenuWrapperProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;
const ImageWrapper = styled.div``;
const ListWrapper = styled.ul``;
const ListElement = styled.li``;
const StyledImage = styled(Image)``;
const ImageLegend = styled.span``;
