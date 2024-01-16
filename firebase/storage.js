'use server';

import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './config';

export const getImages = async () => {
  // ref prend d'abord storage puis le chemin de l'image
  // le chemin peut-être un dossier ou un fichier
  const storageRef = ref(storage, 'test/IMG_20230823_130401.jpg');

  //   listAll(storageRef)
  //     .then((res) => {
  //       console.log('RES : ', res);
  //       res.prefixes.forEach((folderRef) => {
  //         // All the prefixes under listRef.
  //         // You may call listAll() recursively on them.
  //         console.log('folder Ref : ', folderRef);
  //       });
  //       res.items.forEach((itemRef) => {
  //         // All the items under listRef.
  //         console.log('item ref : ', itemRef.name);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // getDownloadURL avec une ref d'une image renvoie le lien de l'image
  const url = await getDownloadURL(storageRef);
  return url;
};
