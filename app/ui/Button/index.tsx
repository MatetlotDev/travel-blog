import Link from 'next/link';
import styles from './style.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link }: ButtonProps) => (
  <Link href={link && link}>
    <button className={styles.button}>{children}</button>
  </Link>
);

export default Button;
