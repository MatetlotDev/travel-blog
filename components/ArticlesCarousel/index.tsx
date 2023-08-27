import { useMemo, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import ArticlePreview from './ArticlePreview';
import { InnerWrapper, NextButton, OuterWrapper, PrevButton } from './wrappers';

export interface Article {
  id: number;
  read_time: number;
  title: string;
  description: string;
  img_preview: string;
  date: Date;
}

interface Props {
  articles: Article[];
  withBlur?: boolean;
  size?: 'normal' | 'fullwidth';
}

const ArticleCarousel = ({ articles, withBlur, size = 'normal' }: Props) => {
  const [position, setPosition] = useState(0);

  const prevDisabled = position === 0;
  const nextDisabled = position === articles.length - 2;

  /**
   * Handle animation with gsap to have a more fluid scroll
   */

  const handlePrev = () => {
    setPosition(position - 1);
  };

  const handleNext = () => {
    setPosition(position + 1);
  };

  const articleCards = useMemo(() => {
    return articles.map((article: Article) => (
      <ArticlePreview key={article.id} article={article} />
    ));
  }, [articles]);

  return (
    <OuterWrapper size={size} withBlur={withBlur}>
      <InnerWrapper position={position}>{articleCards}</InnerWrapper>
      <PrevButton display={`${!prevDisabled}`}>
        <button onClick={handlePrev}>
          <SlArrowLeft />
        </button>
      </PrevButton>
      <NextButton display={`${!nextDisabled}`}>
        <button onClick={handleNext}>
          <SlArrowRight />
        </button>
      </NextButton>
    </OuterWrapper>
  );
};

export default ArticleCarousel;
