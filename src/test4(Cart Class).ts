/**
 * Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */

enum DeliveryStatus {
  HOME,
  SHOP,
}

interface IProduct {
  id: number;
  title: string;
  price: number;
}

interface IDeliveryHome {
  date: Date;
  adress: string;
}

interface IDeliveryShop {
  date: Date;
  id: number;
}

class Cart {
  private products: IProduct[];
  private delivery: {
    deliveryHome: IDeliveryHome[];
    deliveryShop: IDeliveryShop[];
  };

  protected price: number = 0;

  protected iscCheckout: boolean = false;

  public addProducts(product: IProduct) {
    this.products.push(product);
  }

  public delProduct(id: number) {
    this.products.filter(p => p.id !== id);
  }

  public setPrice() {
    this.price = this.products.reduce((acc, p) => acc + p.price, 0);
  }

  public getPrice() {
    return this.price;
  }

  public setDelivery(delivery: IDeliveryHome | IDeliveryShop) {
    function isDeliveryHome(delivery: IDeliveryHome | IDeliveryShop): delivery is IDeliveryHome {
      return 'adress' in delivery;
    }

    if (isDeliveryHome(delivery)) {
      this.delivery.deliveryHome.push(delivery);
    } else {
      this.delivery.deliveryShop.push(delivery);
    }
  }

  public getCheckout() {
    return this.products.length && this.delivery.deliveryHome.length && this.delivery.deliveryShop.length;
  }
}

const cart = new Cart();

cart.setPrice();

const price = cart.getPrice();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */
/**
 * Мой вариант номер 2 (тренировка неследований классов)
 */
class MyCart {
  private products: MyProduct[] = [];
}

class MyProduct {
  constructor(public id: number, public title: string, public price: number) {}
}

class MyDelivery {
  constructor(public date: Date) {}
}

class MyDeliveryHome extends MyDelivery {
  constructor(public address: string, date: Date) {
    super(date);
  }
}

class MyDeliveryShop extends MyDelivery {
  constructor(public id: number) {
    super(new Date());
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Вариант автора
 */
class Product47 {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery47 {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery47 {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery47 {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart47 {
  private products: Product47[] = [];
  private delivery: HomeDelivery | ShopDelivery;

  public addProduct(product: Product47): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product47) => p.id !== productId);
  }

  public getSum(): number {
    return this.products.map((p: Product47) => p.price).reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  // public getCheckout() {
  //   return this.products.length && this.delivery.deliveryHome.length && this.delivery.deliveryShop.length;
  // }

  public checkOut() {
    if (this.products.length === 0) {
      throw new Error('Нет ни одного товара в корзине');
    }
    if (!this.delivery) {
      throw new Error('Не указан способ доставки');
    }

    return { success: true };
  }
}

const cart47 = new Cart47();
cart47.addProduct(new Product47(1, 'Печенье', 10));
cart47.addProduct(new Product47(2, 'Торт', 30));
cart47.addProduct(new Product47(3, 'Шоколад', 30));

cart47.deleteProduct(2);
cart47.getSum();
cart47.checkOut();
