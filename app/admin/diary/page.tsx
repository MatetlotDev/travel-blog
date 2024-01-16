import { handleSubmitDiaryForm } from '@/app/actions';
import styles from './style.module.scss';

export default function DiaryAdminPage() {
  return (
    <div className={styles.wrapper}>
      <form action={handleSubmitDiaryForm}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Titre</label>
          <input name="title" type="text" id="title" />
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
          <textarea name="text" id="text"></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="pictures">Images</label>
          <input type="file" name="pictures" id="pictures" multiple />
        </div>
        <button type="submit">Sauver</button>
      </form>
    </div>
  );
}
