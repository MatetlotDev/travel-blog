import { SearchBar } from 'components';
import { Wrapper } from './wrappers';

interface Props {
  withSearchbar: boolean;
  searchValue?: string;
  // eslint-disable-next-line no-unused-vars
  setSearchValue?: (value: string) => void;
}

export default function Header(props: Props) {
  const { withSearchbar, searchValue, setSearchValue } = props;
  return (
    <Wrapper>
      {withSearchbar && (
        <SearchBar value={searchValue} setValue={setSearchValue} />
      )}
    </Wrapper>
  );
}
