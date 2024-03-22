'use client';

import { createDiaryPost } from '@/app/actions/diary';
import buttonStyles from '@/app/ui/Button/style.module.scss';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './style.module.scss';

const initialState: { message: string | null; success: boolean } = {
  message: null,
  success: false,
};

function Button() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? (
        <span
          style={{ width: '20px', height: '20px', borderWidth: '3px' }}
          className={buttonStyles.loader}
        />
      ) : (
        'Créer'
      )}
    </button>
  );
}

export default function DiaryAdminPage() {
  const [state, formAction] = useFormState(createDiaryPost, initialState);

  const [images, setImages] = useState<{ buffer: string; name: string }[]>([]);
  const [descriptions, setDescriptions] = useState<
    Record<number, { description: string; img_name: string }>
  >({});

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    formRef.current?.reset();
    setImages([]);
  }, [state?.success]);

  const handleChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
    Object.values(e.target.files || {}).forEach((file) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prev) => [
            ...prev,
            { buffer: reader.result as string, name: file.name },
          ]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleSubmit = (formData: FormData) => {
    const newFormData = new FormData();

    formData.forEach((value, key) => {
      if (key === 'image_description') return;

      newFormData.append(key, value);
    });

    Object.values(descriptions).forEach((value) => {
      newFormData.append('image_description', JSON.stringify(value));
    });

    formAction(newFormData);
  };

  return (
    <form action={handleSubmit} ref={formRef} className={styles.form}>
      <div className={styles.wrapper}>
        <h3>Créer un nouveau post</h3>
        <div className={styles.formGroup}>
          <label htmlFor="title">Titre</label>
          <input name="title" type="text" id="title" required />
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
          <textarea name="text" id="text" required></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="pictures">Images</label>
          <input
            type="file"
            name="pictures"
            id="pictures"
            multiple
            accept="image/*"
            onChange={handleChangeImages}
          />
        </div>
        <Button />
        <p>{state?.message}</p>
      </div>
      {images.length && (
        <div className={styles['preview-imgs']}>
          {images.map((img, idx) => (
            <div key={img.name}>
              <Image
                src={img.buffer}
                alt="Image uploaded"
                width={150}
                height={150}
              />
              <input
                onChange={(e) => {
                  setDescriptions((prev) => ({
                    ...prev,
                    [idx]: { description: e.target.value, img_name: img.name },
                  }));
                }}
                type="text"
                id="image_description"
                name="image_description"
              />
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
