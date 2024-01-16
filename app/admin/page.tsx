import Link from 'next/link';
import styles from './style.module.scss';

export default function AdminPage() {
  return (
    <div className={styles.wrapper}>
      <Link href="/admin/diary">Journal de bord</Link>
      <Link href="/admin/articles">Article</Link>
    </div>
  );
}
