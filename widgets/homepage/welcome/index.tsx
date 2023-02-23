import { Circle, HomeWrapper } from './wrappers';

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
      <div className="circles">
        <Circle width={5} delay={0} />
        <Circle width={15} delay={1} />
        <Circle width={30} delay={2} />
      </div>
    </HomeWrapper>
  );
};

export default Welcome;
