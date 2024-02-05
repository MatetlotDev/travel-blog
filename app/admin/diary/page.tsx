'use client';

import { navigate } from '@/app/actions';
import { db } from '@/firebase/config';
import { getExifData, uploadImage } from '@/firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './style.module.scss';

export default function DiaryAdminPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadingStatus, setUploadingStatus] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const handleSubmitDiaryForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setUploading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setUploadingStatus('Starting to uploading images.');

      const docId = uuid();

      // urls of the uploaded images
      const pictureUrls = await Promise.all(
        formData.getAll('pictures').map(async (file) => {
          const imageId = uuid();

          return {
            id: imageId,
            url: await uploadImage(file),
            create_date: new Date().toISOString(), // TODO : get the date from the exif data
            diary_id: docId,
            location: {
              longitude: await getExifData(file, 'longitude'),
              latitude: await getExifData(file, 'latitude'),
            },
          };
        })
      );

      setUploadingStatus(
        'Uploading images finished. Creating images documents.'
      );

      // create a doc in images collection for each image and returns the Ids of the documents
      const imageIds = await Promise.all(
        pictureUrls.map(async (image) => {
          const imageId = image.id;
          const imageRef = doc(db, 'images', imageId);
          await setDoc(imageRef, image);
          return imageId;
        })
      );

      // create a doc in diary collection with the images Ids
      const docContent = {
        id: docId,
        title: formData.get('title'),
        text: formData.get('text'),
        date: formData.get('date'),
        pictures: imageIds,
      };

      setUploadingStatus('Images documents uploaded. Creating diary document.');

      const diaryRef = doc(db, 'diary', docContent.id);
      await setDoc(diaryRef, docContent);
      setUploading(false);
      navigate('/admin');
    } catch (err) {
      setUploading(false);
      console.error(err);
      setError('Error has occured while uploading images');
      // TODO : delete the uploaded images
    }
  };

  return (
    <div className={styles.wrapper}>
      {uploading ? (
        <>
          <div className={styles.loader} />
          <p>{uploadingStatus}</p>
        </>
      ) : (
        <>
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
          <p>{error}</p>
        </>
      )}
    </div>
  );
}
