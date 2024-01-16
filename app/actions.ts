'use server';

import { db } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { RedirectType, redirect } from 'next/navigation';
import { v4 as uuid } from 'uuid';

export async function navigate(path: string, type: RedirectType) {
  redirect(path, type);
}

// async function uploadImage(docId, images) {
//   const filePath = `images/${docId}/${image.name}`;
//   const newImageRef = ref(storage, filePath);
//   await uploadBytesResumable(newImageRef, image);

//   return await getDownloadURL(newImageRef);
// }

export async function handleSubmitDiaryForm(formData: FormData) {
  /**
   * retrieve images
   * add them to firestore storage
   * take back urls
   * create an object with all the data
   * add it to firestore
   *  */

  const docId = uuid();

  // const imagesUrl = await uploadImage(docId, formData.get('pictures'));

  const docContent = {
    id: docId,
    title: formData.get('title'),
    text: formData.get('text'),
    date: formData.get('date'),
    pictures: [],
  };

  try {
    // create a document and add it to firestore collection 'diary'
    const diaryRef = doc(db, 'diary', docContent.id);
    await setDoc(diaryRef, docContent);
  } catch (error) {
    console.error('Error while saving Diary form : ', error);
    throw error;
  }

  redirect('/admin');
}
