'use client';

import { Picture } from '@/app/types';
import { db, storage } from '@/firebase/config';
import { getExifData, uploadImage } from '@/firebase/storage';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './style.module.scss';

const IMAGES_DOC = 'images';
const DIARY_DOC = 'diary';

export default function DiaryAdminPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadingStatus, setUploadingStatus] = useState<string[]>([]);
  const [error, setError] = useState<null | string>(null);

  const handleSubmitDiaryForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setUploading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const files = formData.getAll('pictures');

    const docId = uuid();
    const picturesPending: Picture[] = [];
    const imageIds: string[] = [];

    // 1. upload images an get the urls
    try {
      setUploadingStatus((prev) => [...prev, 'Starting to upload images.']);

      await Promise.all(
        files.map(async (file) => {
          const imageId = uuid();

          const image = await uploadImage(file);

          const createDate = await getExifData(file, 'CreateDate');

          picturesPending.push({
            id: imageId,
            url: image.url,
            name: image.name,
            create_date: new Date(createDate).toISOString(),
            diary_id: docId,
            location: {
              longitude: await getExifData(file, 'longitude'),
              latitude: await getExifData(file, 'latitude'),
            },
          });

          setUploadingStatus((prev) => [
            ...prev,
            `Image uploaded : ${picturesPending.length} / ${files.length}`,
          ]);
        })
      );
    } catch (err) {
      setError(
        `Error has occured while creating the images documents. 
         Deleting ${picturesPending.length} images from storage.`
      );
      console.error(err);

      // delete the uploaded images in the storage
      await Promise.all(
        picturesPending.map(async (image) => {
          const imageRef = ref(storage, `images/${image.name}`);
          await deleteObject(imageRef);
        })
      );

      setUploading(false);
    }

    // 2. create a doc in images collection for each image
    try {
      setUploadingStatus((prev) => [
        ...prev,
        'Uploading images finished. Creating images documents.',
      ]);

      await Promise.all(
        picturesPending.map(async (image) => {
          const imageId = image.id;
          const imageRef = doc(db, IMAGES_DOC, imageId);
          await setDoc(imageRef, image);
          imageIds.push(imageId);
        })
      );
    } catch (err) {
      setError(
        `Error has occured while creating the images documents.
        Deleting ${imageIds.length} images document and ${picturesPending.length} images in storage.`
      );
      console.error(err);

      // delete the doc images in the images collection
      await Promise.all(
        imageIds.map(async (imageId) => {
          await deleteDoc(doc(db, IMAGES_DOC, imageId));
        })
      );

      setUploading(false);
    }

    try {
      // create a doc in diary collection with the images Ids
      const docContent = {
        id: docId,
        title: formData.get('title'),
        text: formData.get('text'),
        date: formData.get('date'),
        pictures: imageIds,
      };

      setUploadingStatus((prev) => [
        ...prev,
        'Images documents uploaded. Creating diary document.',
      ]);

      const diaryRef = doc(db, DIARY_DOC, docContent.id);
      await setDoc(diaryRef, docContent);
      setUploading(false);
      setUploadingStatus((prev) => [
        ...prev,
        'Diary document created. Everything is done.',
      ]);
    } catch (err) {
      setUploading(false);
      setError('Error has occured while creating the document.');
      console.error(err);
    }

    setUploadingStatus([]);
  };

  return (
    <div className={styles.wrapper}>
      {uploading ? (
        <>
          <div className={styles.loader} />
          {uploadingStatus.map((status) => (
            <>
              <p key={status}>{status}</p>
              <br />
            </>
          ))}
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
