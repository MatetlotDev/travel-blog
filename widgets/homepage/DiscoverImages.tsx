import { Button, Carousel } from 'components';
import { DiscoverImagesContainer, Texts } from './wrappers';

const DiscoverImages = () => (
  <DiscoverImagesContainer>
    <Texts>
      <h2>Découvre nos images de voyages</h2>
      <p>
        Parcours notre galerie d’image et inspire toi pour tes prochaines
        aventures.
      </p>
      <Button link="/images">Parcourir les images</Button>
    </Texts>
    <Carousel />
  </DiscoverImagesContainer>
);

export default DiscoverImages;
