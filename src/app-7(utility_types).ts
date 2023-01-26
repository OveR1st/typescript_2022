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
