import { SlArrowDown } from 'react-icons/sl';
import { Circle, DiscoverSpan, HomeWrapper } from './wrappers';

const Welcome = () => {
  return (
    <HomeWrapper>
      <h1>
        Un blog de <strong>voyages</strong> et d&apos;
        <strong>escalade</strong>.
      </h1>
      <p>
        Viens découvrir nos <strong>aventures</strong>...
      </p>
      <DiscoverSpan>
        <span>Découvrir</span>
        <SlArrowDown />
      </DiscoverSpan>
      <Circle width={200} delay={0} />
      <Circle width={400} delay={1} />
      <Circle width={700} delay={2} />
    </HomeWrapper>
  );
};

export default Welcome;
