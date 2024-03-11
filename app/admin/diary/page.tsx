'use client';

import { createDiaryPost } from '@/app/actions/diary';
import buttonStyles from '@/app/ui/Button/style.module.scss';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './style.module.scss';

const initialState: { message: string | null; success: boolean } = {
  message: null,
  success: false,
};

function Button() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? (
        <span
          style={{ width: '20px', height: '20px', borderWidth: '3px' }}
          className={buttonStyles.loader}
        />
      ) : (
        'Créer'
      )}
    </button>
  );
}

export default function DiaryAdminPage() {
  const [state, formAction] = useFormState(createDiaryPost, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    formRef.current?.reset();
  }, [state?.success]);

  return (
    <div className={styles.wrapper}>
      <h3>Créer un nouveau post</h3>
      <form action={formAction} ref={formRef}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Titre</label>
          <input name="title" type="text" id="title" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date</label>
          <input
            defaultValue={new Date().toISOString().split('T')[0]}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="text">Texte</label>
          <textarea name="text" id="text" required></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="pictures">Images</label>
          <input type="file" name="pictures" id="pictures" multiple />
        </div>
        <Button />
      </form>
      <p>{state?.message}</p>
    </div>
  );
}
