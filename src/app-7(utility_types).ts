/**
 * Partial, Required, Readonly (81 lesson)
 * Под капотом это mapped типы
 */
interface User81 {
  name: string;
  age?: number;
  email: string;
}
//Partial - все будет не обязательное
type partial81 = Partial<User81>;

const p81: partial81 = {};

//Required - обязательно
type required81 = Required<User81>;
type required812 = Required<Readonly<User81>>;

/**
 * Pick, Omit, Extract, Exclude (82 lesson)
 * под капотом это mapped типы
 */

interface PaymentPersistent82 {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type Payment82 = Omit<PaymentPersistent82, 'id'>;

type PaymentRequisits82 = Pick<PaymentPersistent82, 'from' | 'sum'>;

type ExtractEx82 = Extract<'from' | 'to' | PaymentPersistent82, string>;
type ExcludeEx82 = Exclude<'from' | 'to' | PaymentPersistent82, string>;

/**
 * ReturnType, Parameters, ConstructorParameters (83 lesson)
 */
//ReturnType позволяет на нексте удобно получить статичные пропсы, ну или в целом мы не знаем что возвращаем функция
// и мы можем попытаться вытащить возвращаемый тип
class User83 {
  constructor(public id: number, public name: string) {}
}

function getData83(id: number): User83 {
  return new User83(id, 'Вася');
}

type RT83 = ReturnType<typeof getData83>;
type RT283 = ReturnType<() => void>; //void
type RT383 = ReturnType<<T>() => T>; //unknown
type RT483 = ReturnType<<T extends string>() => T>; //string

type PT83 = Parameters<typeof getData83>;
type first83 = PT83[0];

type CP83 = ConstructorParameters<typeof User83>;
type IT83 = InstanceType<typeof User83>;

/**
 * Awaited (84 lesson)
 */
type A84 = Awaited<Promise<Promise<string>>>;

interface IMenu84 {
  name: string;
  url: string;
}

async function getMenu84(): Promise<IMenu84[]> {
  return [{ name: 'Bacя', url: 'analytics' }];
}

//Awaited нужен чтобы развернуть промис и достать возвращаемый тип промисса

type R84 = Awaited<ReturnType<typeof getMenu84>>;

async function getArray84<T>(x: T): Promise<Awaited<T>[]> {
  return [await x];
}
async function getArray842<T>(x: T): Promise<T[]> {
  return [await x];
}
