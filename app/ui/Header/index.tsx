import { SearchBar } from 'app/ui';
import styles from './style.module.scss';

interface Props {
  withSearchbar: boolean;
}

export default function Header(props: Props) {
  const { withSearchbar } = props;
  return <div className={styles.wrapper}>{withSearchbar && <SearchBar />}</div>;
}
