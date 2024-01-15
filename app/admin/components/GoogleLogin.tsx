'use client';

import styles from '@/app/ui/Button/style.module.scss';
import { onAuthStateChanged, signInWithGoogle, signOut } from '@/firebase/auth';
import { useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

// TODO : change any to User type

function useUserSession(initialUser: any) {
  // The initialUser comes from the server through a server component
  const [user, setUser] = useState(initialUser);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser: any) => {
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser: any) => {
      if (user === undefined) return;
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
  }, [router, user]);

  return user;
}

interface Props {
  initialUser: any;
}

export default function GoogleLogin(props: Props) {
  const { initialUser } = props;

  const user = useUserSession(initialUser);

  console.log(user);

  const handleSignIn = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithGoogle();
  };

  const handleSignOut = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signOut();
  };

  return !user ? (
    <button
      className={styles.button}
      style={{ marginTop: '20px' }}
      onClick={handleSignIn}
    >
      <FcGoogle style={{ marginRight: '10px', fontSize: '2.5rem' }} /> Sign in
      with Google
    </button>
  ) : (
    <button onClick={handleSignOut}>Sign out</button>
  );
}
