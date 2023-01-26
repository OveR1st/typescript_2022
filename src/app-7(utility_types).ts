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
