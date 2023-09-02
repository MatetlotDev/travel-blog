import { AiOutlineSearch } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import { Wrapper } from './wrappers';

interface Props {
  value: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (value: string) => void;
}

const SearchBar = (props: Props) => {
  const { value, setValue } = props;

  return (
    <Wrapper>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Recherche..."
      />
      {!value ? (
        <AiOutlineSearch size={25} />
      ) : (
        <TfiClose
          className="close-icon"
          onClick={() => setValue('')}
          size={17}
        />
      )}
    </Wrapper>
  );
};

export default SearchBar;
