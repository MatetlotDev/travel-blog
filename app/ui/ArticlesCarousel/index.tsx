'use client';

import { useMemo, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import ArticlePreview from './ArticlePreview';
import styles from './style.module.scss';

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
    <div
      className={`${styles['outer-wrapper']} ${
        withBlur && styles['outer-wrapper_withBlur']
      } ${styles[`outer-wrapper_${size}`]}`}
    >
      <div
        className={styles['inner-wrapper']}
        style={{
          transform: `translateX(-${Math.round(position * 327 + 40)}px)`,
        }}
      >
        {articleCards}
      </div>
      <div
        className={styles['prev-button']}
        style={{ display: !prevDisabled ? 'flex' : 'none' }}
      >
        <button onClick={handlePrev}>
          <SlArrowLeft />
        </button>
      </div>
      <div
        className={styles['next-button']}
        style={{ display: !nextDisabled ? 'flex' : 'none' }}
      >
        <button onClick={handleNext}>
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ArticleCarousel;
