/**
 * Manipulation Types 70
 */
interface IUser70 {
  name: string;
  age: number;
}

type KeysOfUser70 = keyof IUser70;

const keys70: KeysOfUser70 = 'age';

function getValue70<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user70: IUser70 = {
  name: 'Вася',
  age: 444,
};

const userName70 = getValue70(user70, 'age');

/**
 * Typeof (72 lesson)
 */

let strOrNum72: string | number = 5;

if (Math.random() > 0.5) {
  strOrNum72 = 5;
} else {
  strOrNum72 = '5';
}

if (typeof strOrNum72 === 'string') {
  strOrNum72;
} else {
  strOrNum72;
}

let str2orNumber72: typeof strOrNum72; //возьми тип который был у этой переменной

const user72 = {
  name: 'vas9',
};

type keyOfUser72 = keyof typeof user72;

enum Direction72 {
  Up,
  Down,
}

type d = keyof typeof Direction72;
