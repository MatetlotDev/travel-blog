import { useMemo, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import ArticlePreview from './ArticlePreview';
import { InnerWrapper, NextButton, OuterWrapper, PrevButton } from './wrappers';

export interface articleType {
  id: number;
  read_time: number;
  title: string;
  description: string;
  img_preview: string;
  date: Date;
}

interface carouselPropsType {
  articles: articleType[];
  withBlur: boolean;
}

const ArticleCarousel = ({ articles, withBlur }: carouselPropsType) => {
  const [position, setPosition] = useState(0);

  const prevDisabled = position === 0;
  const nextDisabled = position === articles.length - 2;

  const handlePrev = () => {
    setPosition(position - 1);
  };

  const handleNext = () => {
    setPosition(position + 1);
  };

  const articleCards = useMemo(() => {
    return articles.map((article: articleType) => (
      <ArticlePreview key={article.id} article={article} />
    ));
  }, [articles]);

  return (
    <OuterWrapper withBlur={withBlur}>
      <InnerWrapper position={position}>{articleCards}</InnerWrapper>
      <PrevButton display={!prevDisabled}>
        <button onClick={handlePrev}>
          <SlArrowLeft />
        </button>
      </PrevButton>
      <NextButton display={!nextDisabled}>
        <button onClick={handleNext}>
          <SlArrowRight />
        </button>
      </NextButton>
    </OuterWrapper>
  );
};

export default ArticleCarousel;
