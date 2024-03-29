'use server';

import { db, storage } from '@/firebase/config';
import exif from 'exif-reader';
import {
  QuerySnapshot,
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  where,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { revalidatePath } from 'next/cache';
import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';
import { v4 as uuid } from 'uuid';
import { DiaryDay, Picture } from '../types';
import { getSession } from './authentication';

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

const createBlurUrl = async (url: string) => {
  const buffer = await fetch(url, { cache: 'no-store' }).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer, { size: 10 });

  return base64;
};

const processSnapshot = async (querySnapshot: QuerySnapshot) => {
  const promises = querySnapshot.docs.map(async (doc) => {
    const blurUrl = doc.data().blur_url;

    const base64 = blurUrl || (await createBlurUrl(doc.data().url));

    return {
      ...doc.data(),
      id: doc.id,
      blur_url: base64,
    } as Picture;
  });

  return Promise.all(promises);
};

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

      const images: Picture[] = await processSnapshot(querySnapshot);

      const content = document.data();

      return {
        ...content, // document data
        pictures: images,
      } as DiaryDay;
    })
  );
}

const imageToBase64 = async (image: File) => {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const imageCompressed = await sharp(buffer)
    .resize(20, 20)
    .toFormat('jpeg')
    .jpeg({ quality: 20 })
    .toBuffer();

  return `data:image/jpeg;base64,${imageCompressed.toString('base64')}`;
};

const compressImage = async (image: File) => {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const compressed = await sharp(buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 60 })
    .toBuffer();

  return compressed;
};

export async function uploadImage(image: File) {
  try {
    const filePath = `${
      process.env.NEXT_PUBLIC_FIREBASE_IMAGES_COLLECTION
    }/${uuid()}_${image.name}`;
    const newImageRef = ref(storage, filePath);

    const compressed = await compressImage(image);

    await uploadBytes(newImageRef, compressed);

    const metadata = await getMetadata(newImageRef);
    const url = await getDownloadURL(newImageRef);

    return { url, name: metadata.name, short_name: image.name };
  } catch (error) {
    return { error };
  }
}

function convertGeoToLoc(location?: number[]) {
  if (!location || !location?.length) return null;
  return location[0] + location[1] / 60 + location[2] / 3600;
}

export async function getExifData(image: File) {
  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const metadata = await sharp(buffer).metadata();

    if (!metadata.exif) return null;

    const exifData = exif(metadata.exif);

    if (exifData) return exifData;
    return null;
  } catch (error) {
    console.error('Reading exif data ERROR : ', error);
    return null;
  }
}

export async function createDiaryPost(
  prevState: { message: string | null; success: boolean },
  formData: FormData
) {
  const session = await getSession();
  if (!session) return { message: 'Not authenticated', success: false };

  const IMAGES_DOC =
    process.env.NEXT_PUBLIC_FIREBASE_IMAGES_COLLECTION || 'images_dev';
  const DIARY_DOC =
    process.env.NEXT_PUBLIC_FIREBASE_DIARY_COLLECTION || 'diary_dev';

  const files: File[] = formData.getAll('pictures') as File[];

  const diaryDate = new Date(String(formData.get('date'))).toISOString();

  const descriptions = formData
    .getAll('image_description')
    .map((data) => JSON.parse(data as string)) as unknown as {
    description: string;
    img_name: string;
  }[];

  const docId = uuid();
  const picturesPending: Picture[] = [];
  const imageIds: string[] = [];

  // 1. upload images an get the urls
  if (files[0]?.name && files[0]?.size) {
    try {
      await Promise.all(
        files.map(async (file) => {
          const imageId = uuid();

          const exifData = await getExifData(file);

          const createDate = exifData?.Image?.DateTime;

          const longitude =
            convertGeoToLoc(exifData?.GPSInfo?.GPSLongitude) || null;
          const latitude =
            convertGeoToLoc(exifData?.GPSInfo?.GPSLatitude) || null;

          const image = await uploadImage(file as File);

          const blurUrl = await imageToBase64(file as File);

          if (!image.name || !image.url)
            throw new Error(
              'image name or url is missing. Error : ' + image.error
            );

          picturesPending.push({
            id: imageId,
            url: image.url,
            blur_url: blurUrl,
            name: image.name,
            create_date: createDate
              ? new Date(createDate).toISOString()
              : new Date(diaryDate).toISOString(),
            diary_id: docId,
            location: {
              longitude,
              latitude,
            },
            description:
              descriptions.find((desc) => desc.img_name === image.short_name)
                ?.description || null,
          });
        })
      );
    } catch (err) {
      console.error(err);
      return {
        message: `Failed while storing images. ${picturesPending.length} images succeeded.`,
        success: false,
      };
    }
  }

  // 2. create a doc in images collection for each image
  if (files[0]?.name && files[0]?.size) {
    try {
      await Promise.all(
        picturesPending
          .sort((a, b) => {
            const dateA = new Date(a.create_date).getTime();
            const dateB = new Date(b.create_date).getTime();
            return dateA - dateB;
          })
          .map(async (image) => {
            const imageId = image.id;
            const imageRef = doc(db, IMAGES_DOC, imageId);
            await setDoc(imageRef, image);
            imageIds.push(imageId);
          })
      );
    } catch (err) {
      console.error(err);
      return {
        message: `Failed while creating images document. ${imageIds.length} document succeeded.`,
        success: false,
      };
    }
  }

  // 3. create a doc in diary collection with the images Ids
  try {
    const docContent = {
      id: docId,
      title: formData.get('title'),
      text: formData.get('text'),
      date: diaryDate,
      pictures: imageIds,
    };

    const diaryRef = doc(db, DIARY_DOC, docContent.id);
    await setDoc(diaryRef, docContent);
  } catch (err) {
    console.error(err);

    return { message: 'Failed while creating diary document.', success: false };
  }

  revalidatePath('/admin/diary');
  return { message: 'Diary post created successfully.', success: true };
}
