export const reduceStringArrayToLengthLimit = (stringArray: string[], totalLimit: number) => {
  let currentStringLengths: number = 0;
  return stringArray.map((str: string, index: number) => {
    if ((str.length + currentStringLengths <= totalLimit)) {
      currentStringLengths += str.length
      return str;
    }

    return '';
  }).filter((str: string) => str !== '') || [];
}