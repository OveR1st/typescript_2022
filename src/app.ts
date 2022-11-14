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
