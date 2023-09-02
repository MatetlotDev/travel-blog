import { Article } from 'components';

export const useAutocomplete = (value: string, options: Article[]) => {
  const filtered: Article[] = options.filter((option) => {
    const allTitleWords = option.title.split(' ');

    return allTitleWords.filter((word) =>
      word.toLowerCase().startsWith(value.toLowerCase())
    ).length;
  }); // liste des options triée

  const unfiltered: Article[] = options.filter((option) => {
    const allTitleWords = option.title.split(' ');

    return !allTitleWords.filter((word) =>
      word.toLowerCase().startsWith(value.toLowerCase())
    ).length;
  }); // liste des options qui ne rentre pas dans le filtre

  return [filtered, unfiltered, options];
};
