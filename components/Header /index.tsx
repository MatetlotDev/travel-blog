import Autocomplete from 'components/Autocomplete';
import { Wrapper } from './wrappers';

interface Props {
  withSearchbar: boolean;
}

export default function Header(props: Props) {
  const { withSearchbar } = props;
  return (
    <Wrapper>
      {withSearchbar && <Autocomplete options={articlesTitle} />}
    </Wrapper>
  );
}

const articlesTitle = [
  'L’électricité en fourgon amménagé',
  'L’isolation en van',
  'Comment optimiser l’espace ?',
  'Aménager son propre van !',
  'Comment optimiser l’espace ?',
];
