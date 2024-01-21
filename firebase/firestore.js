import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from './config';

export const getDiaries = async () => {
  // get all diaries documents from firestore
  const querySnapshot = await getDocs(collection(db, 'diary'));

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

      const images = [];
      querySnapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() });
      });

      const content = document.data();

      return {
        ...content, // document data
        pictures: images,
      };
    })
  );
};
