import { Picture } from 'constants/global';

export const sortPicturesByCreateDate = (pictures: Picture[]) => {
  const picturesFiltered = pictures.sort(
    (a, b) =>
      new Date(b.create_date).getTime() - new Date(a.create_date).getTime()
  );

  const groupedPictures: Picture[][] = [];
  let currentGroup: Picture[] = [];
  let previousDate: Date | null = null;

  picturesFiltered.forEach((picture) => {
    const currentDate = new Date(picture.create_date);

    if (previousDate && currentDate.getTime() !== previousDate.getTime()) {
      // Different date, start a new group
      groupedPictures.push(currentGroup);
      currentGroup = [];
    }

    currentGroup.push(picture);
    previousDate = currentDate;
  });

  // Add the last group (if any)
  if (currentGroup.length > 0) {
    groupedPictures.push(currentGroup);
  }

  return groupedPictures;
};
