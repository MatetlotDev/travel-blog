import exifr from 'exifr';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from './config';

export async function uploadImage(image) {
  const filePath = `images/${uuid()}_${image.name}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, image);

  return await getDownloadURL(newImageRef);
}

export async function getExifData(image, path) {
  try {
    const exif = await exifr.parse(image);

    return exif[path];
  } catch (error) {
    console.error(error);
  }
}
