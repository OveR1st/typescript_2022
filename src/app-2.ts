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

/**
 * unknown мы не знаем что лежит в переменной
 */

let input: unknown;

input = 3;
input = ['ddd', '4r4r', 3];

//Мы не можем положить unknown переменную в ту где тип отличается от нее
//Можно назначить unknown в any или unknown
let res222: unknown = input;

function run(i: unknown) {
  if (typeof i == 'number') {
    return i++;
  } else {
    //Здесь не будет сужение типа
  }
}

run(input);
async function getData(params: any) {
  try {
    await fetch('');
  } catch (error) {
    //проверка что эррор это инстанс от Эррор
    if (error instanceof Error) console.log(error.message);
  }
}

async function getDataForce(params: any) {
  try {
    await fetch('');
  } catch (error) {
    //принудительный каст переменной к Эррор
    //таак делать не нужно так как возможно app ляжет из-за того что опять же может прийти что то другое

    const e = error as Error;
  }
}
//все union типы будет unknown если мы делаем ИЛИ (но & И будет не unknown)
type U1 = unknown | number;

type I1 = unknown & string;

/**
 * never (никогда не вернется, присвоится. )
 */

function generateError(message: string): never {
  throw new Error(message);
}
//никогда не вернется
function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

//мы ничего не можем присвоить
const a2222: never = 1;

type paymentAction = 'refund' | 'checkout';

function proccessAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      //..
      break;
    case 'checkout':
      //...
      break;
    default:
      //сюда экшен никогда не попадет и поэтому тут never уместен
      /* если в тип добавить еще один кейс и не обработать его в switch case то мы здесь уже будет ловить этот 
         новый тип и тогда невер ругнется 
      */
      const _: never = action;
      throw new Error('Нет такого action');
  }
}
)
function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  //ичерпавающая проверка
  // generateError('dfdf')
}

/**
 * null type
 */

const n: null = null;

//null строго к null если (strictNullChecks выключен)
// const n1: null = undefined

const n2: number = null
const n3: string = null
const n4: boolean = null
const n5: undefined = null

interface User2 {
  name: string
}

function getUser() {
  if(Math.random() > 0.5) {
    //осознаный возврат null если мы знаем что в кейсе не будет возврата обьекта 
    //undefined возврат не явный в runtime
    return null
  } else {
    return {
      name: 'Dima'
    } as User2
  }
}

const user233 = getUser()
const n55 = user233?.name