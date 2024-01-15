import { getAuthenticatedAppForUser } from '@/firebase/config';
import GoogleLogin from './components/GoogleLogin';
import styles from './style.module.scss';

export default async function AdminPage() {
  const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <div className={styles.wrapper}>
      <h1>Admin Page</h1>
      <GoogleLogin initialUser={currentUser?.toJSON()} />
    </div>
  );
}
