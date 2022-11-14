/**
 * Author
 */
let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79100000000',
    email: 'my@email.ru',
    address: {
      city: 'Москва',
    },
  },
};

/**
 * My
 */
interface IInfo {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
}

let info1: IInfo = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '380952385507',
    email: 'my@email.ru',
    address: {
      city: 'Odessa',
    },
  },
};
