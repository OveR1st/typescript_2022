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
function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};

console.log(getFullName('Dmitriy', 'Telniy'));
