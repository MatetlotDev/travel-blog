'use client';

import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import { Article } from '.';
import styles from './style.module.scss';

interface ComponentPropsType {
  article: Article;
}

const ArticlePreview = ({ article }: ComponentPropsType) => {
  return (
    <Link
      className={styles['article-preview']}
      href={`/articles/${article.id}`}
    >
      <div
        className={styles['image-div']}
        style={{ backgroundImage: `url(${article.img_preview})` }}
      />
      <div className={styles.content}>
        <div className={styles['reading-time']}>
          <div className={styles.center}>
            {article.read_time}
            <span>min</span>
          </div>
        </div>
        <h6>{article.title}</h6>
        <span className={styles.date}>
          {article.date.toLocaleDateString('fr-BE')}
        </span>
        <p>{article.description}</p>
        <div className={styles.flex}>
          <div className={styles.line} />
          <span className={styles.read}>Lire</span>
          <SlArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreview;
