'use client';

import { uploadImage } from '@/firebase/storage';
import styles from './style.module.scss';

const handleSubmitDiaryForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  // urls of the uploaded images
  const pictureUrls = await Promise.all(
    formData.getAll('pictures').map((file) => uploadImage(file))
  );

  // create a doc in images collection for each image

  // create a doc in diary collection with the images Ids
};

export default function DiaryAdminPage() {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmitDiaryForm}>
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
