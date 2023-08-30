import { useAppDispatch } from 'hooks';
import { ChangeEvent, useState } from 'react';
import { setIsSearching } from 'state/articles';
import { Wrapper } from './wrappers';

interface Props {
  options: string[];
}

// options est un tableau avec tout les titres des articles
// il faut comparer la valeur du input avec chaque mot dans les titres

export default function Autocomplete(props: Props) {
  const { options } = props;

  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!value && e.target.value) dispatch(setIsSearching({ value: true }));
    if (value && !e.target.value) dispatch(setIsSearching({ value: false }));

    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <input type="text" value={value} onChange={handleOnChange} />
    </Wrapper>
  );
}
