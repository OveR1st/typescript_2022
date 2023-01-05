// /**
//  * Manipulation Types 70
//  */
// interface IUser70 {
//   name: string;
//   age: number;
// }

// type KeysOfUser70 = keyof IUser70;

// const keys70: KeysOfUser70 = 'age';

// function getValue70<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// const user70: IUser70 = {
//   name: 'Вася',
//   age: 444,
// };

// const userName70 = getValue70(user70, 'age');

interface Data71 {
  group: number;
  name: string;
}

const data: Data71[] = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 2, name: 'c' },
  { group: 2, name: 'd' },
  { group: 3, name: 'e' },
  { group: 3, name: 'f' },
  { group: 3, name: 'g' },
  { group: 4, name: 'yy' },
  { group: 5, name: 'hhh' },
  { group: 5, name: '22' },
  { group: 6, name: 'jj' },
  { group: 7, name: 'nn' },
  { group: 7, name: 'm' },
];

type KeysOfObj71 = keyof Data71;

const b71: KeysOfObj71 = 'group';

function groupHandler<K extends keyof Data71>(data: Data71[], keyGroup: K): Record<string, Data71[]> | null {
  // data.map((el) => el.)

  if (keyGroup === 'group') {
    const newData = data.reduce((acc: Record<string, Data71[]>, obj) => {
      //acc[obj[keyGroup].toString()]
      if (obj.group in acc) {
        acc[obj[keyGroup].toString()]?.push(obj);
      } else {
        acc[obj[keyGroup].toString()] = [obj];
      }
      return acc;
    }, {});
    return newData;
  } else {
    return null;
  }
}

console.log(groupHandler(data, 'group'));

/**
 * Author Code (best)
 */

type key71 = string | number | symbol;

interface IGroup71<T> {
  [key: string]: T[];
}
function group71<T extends Record<key71, any>>(array: T[], key: keyof T): IGroup71<T> {
  return array.reduce<IGroup71<T>>((map: IGroup71<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }

    map[itemKey] = curEl;
    return map;
  }, {});
}

const res71 = group71(data, 'group');
