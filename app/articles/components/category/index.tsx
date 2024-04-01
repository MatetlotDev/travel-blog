import { Category as CategoryType } from '@/app/types';
import { mockedArticles } from '@/constants/global';
import { ArticleCarousel } from 'app/ui';
import styles from '../../style.module.scss';
interface Props {
  category: CategoryType;
}

export default function Category(props: Props) {
  const { category } = props;

  return (
    <div className={styles.wrapper}>
      <h2>{category.name}</h2>
      <ArticleCarousel size="fullwidth" articles={mockedArticles} />
    </div>
  );
}
