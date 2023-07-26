interface IUser66 {
  id: number;
  name: string;
}

const data66: IUser66[] = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Надя' },
];

function sort66<T extends IUser66>(data: T[], incOrDec: boolean): T[] {
  function sortfn<T extends IUser66>(a: T, b: T): number {
    if (incOrDec) {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  }
  const newArr = data.sort(sortfn);
  return newArr;
}

const newArrUp = sort66(data66, true);
const newArrDown = sort66(data66, false);

/**
 * Author
 */

interface ID66 {
  id: number;
}

function sortAuthor66<T extends ID66>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case 'asc':
        return a.id - b.id;
      case 'desc':
        return b.id - a.id;
    }
  });
}
//
