type SortingOrder = 'asc' | 'desc';

export const sortStringArrayAlphabetically = (stringArray: string[], order: SortingOrder = 'desc', locale = 'no') => {
  return stringArray.sort((a: string, b: string) => {
    if (order === 'desc')
      return a.localeCompare(b, locale);

    return b.localeCompare(a, locale);
  })
}