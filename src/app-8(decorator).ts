/**
 * pattern decorator (86 lesson)
 */

interface IUserService86 {
  users: number;
  getUsersInDatabase(): number;
}

class UserServie86 implements IUserService86 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser86(obj: UserServie86) {
  //... декоратор это функция которая что то переопределяет у инстанса
  obj.users = 0;
  return obj;
}

function logUser86(obj: UserServie86) {
  //... декоратор это функция которая что то переопределяет у инстанса
  console.log('Users:' + obj.users);
  return obj;
}

console.log(new UserServie86().getUsersInDatabase()); //1000

console.log(logUser86(nullUser86(new UserServie86())).getUsersInDatabase()); // Users: 0, 0
console.log(nullUser86(logUser86(new UserServie86())).getUsersInDatabase()); // Users: 1000, 0

/**
 * Последовательность применения так же влияет на результат
 */
