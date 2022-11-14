/**
 * Number, string, boolean types
 */
let revenue: number = 1000;
let bonus: number = 500;
let c: string = 'dsds';
let b: boolean = true;

let res: number = revenue + bonus;
console.log(res);

/**
 * Function types
 */

function getFullName(userEntity: IUser): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};

/**
 * Object types
 */
interface IUser {
  firstname: string;
  surname: string;
  city: string;
  age: string;
}

const user = {
  firstname: 'Dmitriy',
  surname: 'Telniy',
  city: 'Odessa',
  age: '26',
};
console.log(getFullName(user));

/**
 * Arrays 15 lesson
 */

const skills: string[] = ['Dev', 'DevOps', 'Designer', 'QA'];

for (const skill of skills) {
  console.log(skill.toLocaleLowerCase());
}

const reduce: string[] = skills
  .filter(s => s !== 'DevOps')
  .map(s => s + '! ')
  .reduce((accum: string[], value) => {
    accum.push(value.toLocaleLowerCase());

    return accum;
  }, []);

console.log('reduce', reduce);

/**
 * Tuples 16 lesson
 */

//isTuples
const skill: [number, string] = [1, 'Dev'];
const [id, skillName] = skill;

const arr: [number, string, ...boolean[]] = [1, 'sdd', true, false, true];

/**
 * ReadOnly 17 lesson
 */
const skillReadOnly: readonly [number, string] = [1, 'Dev'];
const skillsReadOnly: readonly string[] = ['dev', 'qa'];

const skillsReadOnly1: ReadonlyArray<string> = ['dev', 'qa'];

/**
 * Enum
 */
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILED,
}

const response = {
  message: 'ok',
  statusCode: StatusCode.SUCCESS,
};

// const SUCCESS = 'success';

//1 - success
//2 - in process
//3 - failed

//1 - 's'
//2 - 'p'
//3 - 'f'

if (response.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {
  console.log('status', status);
}

action(StatusCode.SUCCESS);
action(StatusCode.IN_PROCESS);
action(StatusCode.FAILED);

action(1);
action(2);
action(3);

function compute() {
  return 3;
}

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

// function test(x: { ADMIN: number }) {}

// test(Roles);

const res2 = Roles.ADMIN;
