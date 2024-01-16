'use client';

import buttonStyles from '@/app/ui/Button/style.module.scss';
import { signInWithGoogle } from '@/firebase/auth';
import { useUserSession } from '@/hooks/useUserSession';
import { FcGoogle } from 'react-icons/fc';
import SignOutButton from './components/SignOutButton';
import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout(props: Props) {
  const { children } = props;

  const user = useUserSession();

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithGoogle();
  };

  return (
    <div className={styles.layout}>
      {user ? (
        <>
          <SignOutButton />
          {children}
        </>
      ) : (
        <div className={styles.wrapper}>
          <button
            className={buttonStyles.button}
            style={{ marginTop: '20px' }}
            onClick={handleSignIn}
          >
            <FcGoogle style={{ marginRight: '10px', fontSize: '2.5rem' }} />{' '}
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}
