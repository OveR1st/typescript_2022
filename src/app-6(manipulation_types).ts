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

/**
 * Indexed Access Types (74 lesson)
 */

interface Permission74 {
  endDate: Date;
}
interface Role74 {
  name: string;
}

interface User74 {
  name: string;
  roles: Role74[];
  permission: Permission74;
}

const user74: User74 = {
  name: 'Вася',
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

const nameUser74 = user74['name'];
const rolesNames74 = 'roles';

type rolestype74 = User74['roles'];
type roleType742 = User74[typeof rolesNames74];

type roleType74 = User74['roles'][number];
type dateType = User74['permission']['endDate'];

const roles74 = ['admin', 'user', 'super-user'] as const;
type roleTypes742 = typeof roles74[number];

/**
 * Conditional Types (75 lesson)
 */

const a75: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResp75<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
  additionalData: T extends 'success' ? string : number;
}

const done75: HTTPResp75<'success'> = {
  code: 200,
  data: 'done',
  additionalData: 'done',
};

const error75: HTTPResp75<'failed'> = {
  code: 200,
  data: new Error(),
  additionalData: 2,
};

class User75 {
  id: number;
  name: string;
}

class UserPers75 extends User75 {
  dbId: string;
}
function getUser75(dbIdOrId: number): User75;
function getUser75(dbIdOrId: string): UserPers75;
function getUser75(dbIdOrId: string | number): User75 | UserPers75 {
  if (typeof dbIdOrId === 'number') {
    return new User75();
  } else {
    return new UserPers75();
  }
}

type UserOrPers75<T extends string | number> = T extends number ? User75 : UserPers75;

function getUser752<T extends string | number>(id: T): UserOrPers75<T> {
  if (typeof id === 'number') {
    return new User75() as UserOrPers75<T>;
  } else {
    return new UserPers75() as UserOrPers75<T>;
  }
}

const res75 = getUser752(1);
const res752 = getUser752('2');
