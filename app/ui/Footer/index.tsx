import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import styles from './style.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.socials}>
          <p>Retrouvez nous sur les réseaux</p>
          <div className={styles.icons}>
            <Link href="">
              <FaInstagram />
            </Link>
            <Link href="">
              <FaLinkedin />
            </Link>
            <Link href="">
              <FaFacebookF />
            </Link>
          </div>
        </div>
        <div className={styles.contact}>
          <p>Une question ?</p>
          <button>
            <GoMail />
          </button>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Acceuil</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/map-monde">Carte du monde</Link>
            </li>
            <li>
              <Link href="/journal">Journal</Link>
            </li>
            <li>
              <Link href="/images">Images</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.credential}>
        Created by Matthias - visit me on{' '}
        <a href="https://github.com/MatetlotDev/travel-blog">github</a>
      </p>
    </footer>
  );
};

export default Footer;
