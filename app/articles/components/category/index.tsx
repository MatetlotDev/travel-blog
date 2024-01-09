import { Category as CategoryType, mockedArticles } from 'app/constants/global';
import { ArticleCarousel } from 'app/ui';
import { Wrapper } from './wrappers';

interface Props {
  category: CategoryType;
}

export default function Category(props: Props) {
  const { category } = props;

  return (
    <Wrapper>
      <h2>{category.name}</h2>
      <ArticleCarousel size="fullwidth" articles={mockedArticles} />
    </Wrapper>
  );
}
