import {
  getSession,
  submitLoginPassword,
} from '@/app/(actions)/authentication';
import buttonStyles from '@/app/ui/Button/style.module.scss';
import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

export default async function AdminLayout(props: Props) {
  const { children } = props;

  const session = await getSession();

  return (
    <div className={styles.layout}>
      {session?.isValid ? (
        children
      ) : (
        <div className={styles.wrapper}>
          <form action={submitLoginPassword}>
            <input type="password" name="password" id="password" />
            <button className={buttonStyles.button} type="submit">
              Valider
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
