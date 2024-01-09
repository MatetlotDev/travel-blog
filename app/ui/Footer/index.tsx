import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { Contact, FooterWrapper, Menu, Socials } from './wrappers';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="flex">
        <Socials>
          <p>Retrouvez nous sur les réseaux</p>
          <div className="icons">
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
        </Socials>
        <Contact>
          <p>Une question ?</p>
          <button>
            <GoMail />
          </button>
        </Contact>
        <Menu>
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
        </Menu>
      </div>
      <p className="credential">
        Created by Matthias - visit me on{' '}
        <a href="https://github.com/MatetlotDev/travel-blog">github</a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
