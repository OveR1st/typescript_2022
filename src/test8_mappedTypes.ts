/**
 * Необходимо сделать тип для результата валидации формы
 * основываясь на типе формы
 */

// type ModifierToAccess78<Type> = {
//   +readonly ////тип для мапинга
//   /**
//    *  Когда нам нужны такие же ключи но с другими типами
//    *  Exclude исключает из итогово обьекта тип свойство
//    */
//   [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessprojects'>]-?: boolean;
// };

// type UserAccess1778 = ModifierToAccess77<UserRoles77>;

// interface IError78 {  // не правильный мой вариант
//   isValid: boolean;
//   errorMessage?: string;
// }

interface IForm78 {
  name: string;
  password: string;
}

const form78: IForm78 = {
  name: 'Вася',
  password: '123',
};

const formValidator: FormMapped78 = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Должен быть длинее 5 символов' },
};

type MappedTypeForm<Type> = {
  [P in keyof Type]: { isValid: true } | { isValid: false; errorMessage: string }; //вариант автора
};

type FormMapped78 = MappedTypeForm<IForm78>;
