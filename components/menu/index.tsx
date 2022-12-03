import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
// import { useAppSelector } from '../../hooks';
// import { globalReducer } from '../../store/global';

const Menu: NextPage = () => {
  // const { menuOpen, actualPage } = useAppSelector(globalReducer);

  return (
    <Container>
      <ImageWrapper>
        <StyledImage src="url" alt="description" />
        <ImageLegend></ImageLegend>
      </ImageWrapper>
      <ListWrapper>
        <ListElement>Acceuil</ListElement>
        <ListElement>Articles</ListElement>
        <ListElement>Journal</ListElement>
        <ListElement>Map Monde</ListElement>
        <ListElement>Images</ListElement>
      </ListWrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div``;
const ImageWrapper = styled.div``;
const ListWrapper = styled.ul``;
const ListElement = styled.li``;
const StyledImage = styled(Image)``;
const ImageLegend = styled.span``;
