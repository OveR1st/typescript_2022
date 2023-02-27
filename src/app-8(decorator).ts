/**
 * pattern decorator (86 lesson)
 */

interface IUserService86 {
  users: number;
  getUsersInDatabase(): number;
}
@setUserAdvanced87(4)
@setUsers88(2) //функция
@threeUserAdvanced87 // вызов второй   (new UserServie86().getUsersInDatabase() - выведет 3)
@nullUser86 // вызов первый
class UserServie86 implements IUserService86 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser86(target: Function) {
  //... декоратор это функция которая что то переопределяет у инстанса
  target.prototype.users = 0;
}
function setUsers88(users: number) {
  return (target: Function) => {
    target.prototype.users = users;
  };
}
////////////////

function threeUserAdvanced87<T extends { new (...args: any): {} }>(constructor: T) {
  return class extends constructor {
    users = 3;
  };
}
function setUserAdvanced87(users: number) {
  return <T extends { new (...args: any): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
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

/**
 * Fabric Decorator (88 lesson)
 */

/**
 * Method Decorator (90 lesson)
 */

interface IUserService90 {
  users: number;
  getUsersInDatabase(): number;
}

class UserService90 implements IUserService90 {
  users: number = 1000;

  @Log90()
  @Catch({ rethrow: true })
  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function Log90() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any) => any>,
  ): TypedPropertyDescriptor<(...args: any) => any> | void => {
    console.log(target); // {}
    console.log(propertyKey); // getUsersInDatabase
    console.log(descriptor);

    // const oldValue =descriptor.value;

    descriptor.value = () => {
      console.log('no error');

      // descriptor.value()
    };
  };

  console.log(new UserService90().getUsersInDatabase());
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any) => any>,
  ): TypedPropertyDescriptor<(...args: any) => any> | void => {
    const method = descriptor.value;

    descriptor.value = async (...args: any[]) => {
      try {
        const res = await method?.apply(target, args);
        return res;
      } catch (error) {
        if (error instanceof Error) {
          console.log(e);
          if (rethrow) {
            throw error;
          }
        }
      }

      // descriptor.value()
    };
  };

  console.log(new UserService90().getUsersInDatabase());
}
