/**
 * Union types 21 lesson (сужениие типов)
 */
function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log('id string', id);
  } else if (typeof id === 'number') {
    console.log('id number', id);
  } else {
    console.log('id boolean', id);
  }
}

// logId(2);
// logId('dd');
// logId(false);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log('err Array', err);
  } else {
    console.log('err string', err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log('a', obj.a);
  } else {
    console.log('b', obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log('a', a);
  } else {
  }
}

/**
 * Literal types 22 lesson
 */
// enum RequestType {
//   GET = 'GET',
//   POST = 'POST',
// }

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  //   fetch(url, method);
  return 1;
}

let a = 'dsadd';
const b3 = 'dsadd';

const method = 'POST';
//warning
// fetchWithAuth('fdfd', method);

/**
 * Type Aliases 23 lesson
 */
type httpMethod = 'post' | 'get';

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};
//intersection
type UserWithRole = User & Role;

const user2: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 2,
};

/**
 * Interface 24 lesson
 */

interface IUser2 {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface Role2 {
  roleId: number;
}

interface IUserWithRole extends IUser2, Role2 {
  city?: string;
  createdAt?: Date;
}

const user3: IUserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 2,

  log(id) {
    return '';
  },
};

interface IUserDic {
  [index: number]: User;
}

type IUserDic2 = {
  [index: number]: User;
};

type ud = Record<number, User>;

/**
 * Interface vs Types
 */

interface User1 {
  name: string;
}

interface User1 {
  age: number;
}
//is merge interface

const user5: User1 = {
  name: 'as',
  age: 33,
};

// type User2 = {
//   name: string;
// };

// type User2 = {
//   age: string;
// };

/**
 * Optional
 */

interface IUserOpt {
  login: string;
  password?: string;
}

const userOpt: IUserOpt = {
  login: '3e3ed@gmail.com',
  //   password: 'dadadadaed3',
};

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
multiply(4);

interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary';
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test1(param?: string) {
  //param === undefined
  const t = param ?? multiply(5);
}

/**
 * Void
 */

function logId1(id: string | number): void {
  console.log(id);
}
//void - ничего не возвращает
const a1 = logId(1);

function multiply1(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
  //нам все равно что возврашает функция
  return true;
};
//: void мв игнорируем что функция может что то вернуть
const b2 = f2();

const skills2 = ['Dev', 'DevOps'];

const user533 = {
  s: [''],
};

skills2.forEach(s => user533.s.push(s));
