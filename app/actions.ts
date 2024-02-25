'use server';

import { db } from '@/firebase/config';
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { RedirectType, redirect } from 'next/navigation';
import { DiaryDay, Picture } from './types';

export async function navigate(path: string, type?: RedirectType) {
  redirect(path, type);
}

export async function getDiaryImages(id: string) {
  // get diary doc from firestore querying with it's id
  const diaryDoc = await getDoc(doc(db, 'diary', id));

  // get diary images from diary doc
  const imagesIds = diaryDoc.data()?.pictures;

  const imagesData = await Promise.all(
    imagesIds.map(async (id: string) => {
      const imageDoc = await getDoc(doc(db, 'images', id));
      return imageDoc.data();
    })
  );

  return imagesData;
}

export async function getPaginatedDiaries(params: string, lastId?: string) {
  // get all diaries documents from firestore
  const diaryCollection = collection(db, 'diary');

  const first = query(diaryCollection, orderBy('date', 'desc'), limit(3));

  const lastElement = lastId ? await getDoc(doc(db, 'diary', lastId)) : null;
  const after = query(
    diaryCollection,
    orderBy('date', 'desc'),
    startAfter(lastElement),
    limit(1)
  );

  const querySnapshot = await getDocs(params === 'init' ? first : after);

  // then get all images documents that match pictures field in diary document
  return Promise.all(
    querySnapshot.docs.map(async (document) => {
      // get images documents that match pictures field in diary document
      const imagesCollection = collection(db, 'images');

      // Use query to get documents by IDs
      const q = query(
        imagesCollection,
        where(documentId(), 'in', document.data().pictures)
      );
      const querySnapshot = await getDocs(q);

      const images: Picture[] = [];
      querySnapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() } as Picture);
      });

      const content = document.data();

      return {
        ...content, // document data
        pictures: images,
      } as DiaryDay;
    })
  );
}
