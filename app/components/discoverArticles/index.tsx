import { mockedArticles } from 'app/constants/global';
import { ArticleCarousel, Button } from 'app/ui';
import styles from './styles.module.scss';

const DiscoverArticles = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <h2>Articles</h2>
        <p>Découvre nos articles et apprend en davantages sur divers sujet.</p>
        <Button link="/articles">Voir tout les articles</Button>
      </div>
      <ArticleCarousel withBlur articles={mockedArticles} />
    </section>
  );
};

export default DiscoverArticles;
