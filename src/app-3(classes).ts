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

/**
 * Methods 39 lesson
 */

enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holded; //если делать по умолчанию то последовательность приоритета будет тут
  createdAt: Date = new Date();
  updateAt: Date;

  constructor(id: number) {
    //это заинит уже после
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
    if (this.status == PaymentStatus.Processed) {
      throw new Error('Платеж не может быть возвращен!');
    }

    this.status = PaymentStatus.Reversed;
    this.updateAt = new Date();
  }
}

const payment = new Payment(1);
payment.unholdPayment();

const time = payment.getPaymentLifeTime();
