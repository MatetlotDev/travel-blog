import styles from './style.module.scss';

const Welcome = () => {
  return (
    <section className={styles.wrapper}>
      <h1>
        Un blog de <strong>voyages</strong> et d&apos;
        <strong>escalade</strong>.
      </h1>
      <p>
        Viens découvrir nos <strong>aventures</strong>...
      </p>
      <div className={styles.circles}>
        <div className={`${styles['circle-1']} ${styles['circle-base']}`} />
        <div className={`${styles['circle-2']} ${styles['circle-base']}`} />
        <div className={`${styles['circle-3']} ${styles['circle-base']}`} />
      </div>
    </section>
  );
};

export default Welcome;
