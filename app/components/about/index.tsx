import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';

const About = () => (
  <div className={styles.wrapper}>
    <div className={styles['blockquote-wrapper']}>
      <span>Salut,</span>
      <blockquote>
        &ldquo;Nous c&apos;est Justine et Matthias, on a créé ce blog pour
        t&apos;emmener dans nos voyages et te partager nos expériences.&rdquo;
      </blockquote>
      <div className={styles['linear-background']} />
    </div>
    <section className={styles['discover-wrapper']}>
      <h3>Découvrir</h3>
      <div className={styles['cards-group']}>
        <Link className={styles['discover-card']} href="/articles">
          <div
            className={`${styles['image-wrapper_base']} ${styles['image-wrapper_1']}`}
          />
          <span>Articles</span>
        </Link>
        <Link className={styles['discover-card']} href="/map-monde">
          <div
            className={`${styles['image-wrapper_base']} ${styles['image-wrapper_2']}`}
          />
          <span>Carte du monde</span>
        </Link>
        <Link className={styles['discover-card']} href="/journal">
          <div
            className={`${styles['image-wrapper_base']} ${styles['image-wrapper_3']}`}
          />
          <span>Journal</span>
        </Link>
        <Link className={styles['discover-card']} href="/images">
          <div
            className={`${styles['image-wrapper_base']} ${styles['image-wrapper_4']}`}
          />
          <span>Images</span>
        </Link>
      </div>
    </section>
    <section className={styles['who-we-are']}>
      <h2>Qui sommes nous ?</h2>
      <span>Justine & Matthias</span>
      <div className={styles['profile-pic-wrapper']}>
        <Image
          src="/homepage/2people.jpg"
          alt="matthias profile picture"
          fill
        />
      </div>
      <p>
        n sait depuis longtemps que travailler avec du texte lisible et
        contenant du sens est source de distractions, et empêche de se
        concentrer sur la mise en page elle-même. Lavantage du Lorem Ipsum sur
        un texte générique comme Du texte. Du texte. Du texte. est quil possède
        une distribution de lettres plus ou moins normale, et en tout cas
        comparable avec celle du français standard. De nombreuses suites
        logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem
        Ipsum leur faux texte par défaut, et une recherche pour Lorem Ipsum vous
        conduira vers de nombreux sites qui n&apos;en sont encore qu&apos;à leur
        phase de construction. Plusieurs versions sont apparues avec le temps,
        parfois par accident, souvent intentionnellement. n sait depuis
        longtemps que travailler avec du texte lisible et contenant du sens est
        source de distractions, et empêche de se concentrer sur la mise en page
        elle-même. Lavantage du Lorem Ipsum sur un texte générique comme Du
        texte. Du texte. Du texte. est quil possède une distribution de lettres
        plus ou moins normale, et en tout cas comparable avec celle du français
        standard. De nombreuses suites logicielles de mise en page ou éditeurs
        de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une
        recherche pour Lorem Ipsum vous conduira vers de nombreux sites qui
        n&apos;en sont encore qu&apos;à leur phase de construction. Plusieurs
        versions sont apparues avec le temps, parfois par accident, souvent
        intentionnellement.
      </p>
    </section>
  </div>
);

export default About;
