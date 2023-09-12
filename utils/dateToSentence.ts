export const dateToSentence = (date: Date) => {
  return date
    .toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .split(' ')
    .map((e) => `${e.slice(0, 1).toUpperCase()}${e.slice(1).toLowerCase()}`)
    .join(' ');
};
