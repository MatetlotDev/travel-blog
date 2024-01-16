'use client';

import buttonStyles from '@/app/ui/Button/style.module.scss';
import { signOut } from '@/firebase/auth';
import { useUserSession } from '@/hooks/useUserSession';
import styles from '../style.module.scss';

export default function SignOutButton() {
  const user = useUserSession();

  const handleSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signOut();
  };

  if (!user) return null;

  return (
    <button
      onClick={handleSignOut}
      className={`${styles['sign-out']} ${buttonStyles.button}`}
    >
      Sign Out
    </button>
  );
}
