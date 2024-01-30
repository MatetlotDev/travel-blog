'use server';

import { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { RedirectType, redirect } from 'next/navigation';

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
