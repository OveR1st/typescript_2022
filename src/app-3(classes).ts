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

/**
 * Overloads Methods (40 lessons)
 */

class User40 {
  skill: string[];

  addSkills(skill: string): void;
  addSkills(skill: string[]): void;
  addSkills(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === 'string') {
      this.skill.push(skillOrSkills);
    } else {
      this.skill.concat(skillOrSkills);
    }
  }
}

// const us = new User40().addSkills()
// us.addSkills('front');
// us.addSkills(['qa', 'back']);
function run40(distance: string): string;
function run40(distance: number): number;
function run40(distance: string | number): string | number {
  if (typeof distance == 'string') {
    return distance;
  } else {
    return distance;
  }
}

run40('2');
run40(2);

/**
 * Getter и Setter (41 lesson)
 */

class User41 {
  _login: string;
  password: string;
  createdAt: Date;

  set login(l: string | number) {
    this._login = 'user-' + l;
    this.createdAt = new Date();
  }

  get login() {
    return this._login;
  }
  // гетеры и сетеры не помогают при работе с асинхронными вещами так как они всегда синронные и блокируют поток js

  async getPassword(p: string) {}
}

const user41 = new User41();

user41.login = 'myLogin';
const t = user41.login;

/**
 * Implements (42 lesson)
 */

interface ILogger {
  log(...args: any): void;
  error(...args: any): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    console.log(...args);
  }
}

interface IPayable {
  pay(paymentId: number): void;
  prise?: number;
}

interface IDeletable {
  delete(): void;
}

class User42 implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }
  //тип имплементации всегда должен быть таким же или шире (юнион) но не заменять на другой
  pay(paymentId: number): void {
    ///
  }
}

/**
 * Extends (43 lesson)
 */
type PaymentStatus43 = 'new' | 'paid';
class Payment43 {
  id: number;
  status: PaymentStatus43 = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class ParsistedPayment43 extends Payment43 {
  database: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // save
  }

  override pay(date?: Date) {
    this.status = 'paid';
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

class User44 {
  //1
  name: string = 'user';

  constructor() {
    //2
    console.log(this.name); //user
  }
}

class Admin44 extends User44 {
  //3
  override name: string = 'admin';
  age: number = 22;
  constructor() {
    //4
    super();
    console.log(this.name); //admin
  }
}

class HttpError extends Error {
  code: number;
  constructor(m: string, code?: number) {
    super(m);
    this.code = code ?? 500;
  }
}

/**
 * Наследование против композиции (45 lesson)
 */

class User45 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Users45 extends Array<User45> {
  searchByName(name: string) {
    return this.filter(u => u.name === name);
  }
  override toString(): string {
    return this.map(u => u.name).join(', ');
  }
}
const user45 = new Users45();
user45.push(new User45('Dima'));
user45.push(new User45('Вася'));
user45.push(new User45('Петя'));
console.log(user45.toString());

class UserList45 {
  //композиция
  users: User45[];

  push(u: User45) {
    this.users.push(u);
  }
}

class Payment45 {
  date: Date;
}

class UserWithPayment extends Payment45 {
  //При наследовании нам прийдется тащить за собой Payment45 мы здесь привязываемся
  name: string;
}

class UserWithPayment2 {
  //композиция
  user: User45;
  payment: Payment45;

  constructor(user: User45, payment: Payment45) {
    this.payment = payment;
    this.user = user;
  }
}
//Наследование лучше использовать в одной доменой структуре

/**
 * Property visible (46 lesson)
 */

class Vehicle {
  public make: string;

  private damages: string[];
  private _model: string;

  protected run: number;

  //приватнсть через JS
  #price: number;

  set model(m: string) {
    this._model = m;
    this.#price = 200;
  }

  get model() {
    // this.addDamage('d')
    this.run = 4;
    return this._model;
  }

  isPriseEqual(v: Vehicle) {
    //еквивалентность двух свойств
    return this.#price === v.#price;
  }

  private addDamage(damage: string) {
    this.damages.push(damage);
  }
}

new Vehicle().model = 'd';

class EuroTrack extends Vehicle {
  setDamage() {
    //модифицроват можем у родителя только public (private нельзя)
  }

  setRun(km: number) {
    this.run = km / 0.62;
    //а вот к protected можно (это разница от private)
  }
}

/**
 * Static property (48 lesson)
 */

class UserService {
  // static name: string = 'ddf'   //статик обратится к Function.name это зарезервированное свойство Function
  private static db: any;

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    UserService.db;
  }

  static {
    //этот инициализатор выполнится сразу
    UserService.db = 'sdf';
  }
}
UserService.getUser(1);

const instance48 = new UserService(1);
instance48.create();

/**
 * This (контекст 49 lesson)
 */

class Payment49 {
  private date: Date = new Date();

  getDate(this: Payment49) {
    //жесткое показываему тсу нужный нам контекст
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment49();
console.log(p.getDate());

const user49 = {
  id: 1,
  paymentDate: p.getDate, //нужен bind
  getDateArrow: p.getDateArrow,
};

user49.paymentDate(); //потеря контекста
user49.getDateArrow(); //не будет потери так как особеность поведения стрелочной функции

class PaymentPersistent extends Payment49 {
  save() {
    return super.getDate();
    return super.getDateArrow(); //код ляжет если обращаться к стрелочному методу в родителе
    //потому что стрелочные функции не записываются в прототип  (можно доступ получить через this)
  }
}

console.log(new PaymentPersistent().save());

/**
 * Types This (50 lesson)
 */

class UserBuilder50 {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder50 {
    return this instanceof AdminBuilder50;
  }
}

class AdminBuilder50 extends UserBuilder50 {
  roles: string[]; //обьекты должны различатся чтобы тайпгарды работали
}

const res50 = new UserBuilder50().setName('Вася');
const res502 = new AdminBuilder50().setName('Вася');

let user50: UserBuilder50 | AdminBuilder50 = new UserBuilder50();

if (user50.isAdmin()) {
  console.log(user50);
} else {
  console.log(user50);
}

/**
 * Абстрактные классы и методы (51 lesson)
 */
// От Абстрактных классов невозможно инсталироватся

abstract class Controller {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log('Start');
    this.handle(req);
    console.log('End');
  }
}

class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}
// new Controller() - error
const c51 = new UserController();
c51.handleWithLogs('Request');
/** console calls
 * Start
 * Request
 * End
 */
