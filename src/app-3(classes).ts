/**
 * Create class
 */
class UserClass {
  name: string;

  // нельзя типизировать возврат конструктора
  constructor(name: string) {
    this.name = name;
  }
}

const user55 = new UserClass('Dima');
console.log(user55);
user55.name = 'Pety';
console.log(user55);

class AdminClass {
  role: number;
}

const admin55 = new AdminClass();
admin55.role = 1;

/**
 * Constructor, overloads
 */

class UserClass38 {
  name: string;
  age: number;
  //overload (реализации)
  //   constructor();
  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: string | number, age?: number) {
    //конструктор имплементации
    if (typeof ageOrName === 'string') {
      this.name = ageOrName;
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName;
    } else if (typeof age === 'number') {
      this.age = age;
    }
  }
}

//^
//|
//мы так удовлетворяем разные перезагрузки конструктора
//в компайл на es6 будет один конструктор последний с проверками else if
const user38 = new UserClass38('Dima');
const user382 = new UserClass38();
const user3823 = new UserClass38(33);
const user382333 = new UserClass38('Dima', 26);
