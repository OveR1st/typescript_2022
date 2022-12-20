/**
 * Generics (61 lesson)
 */
const num61: Array<number> = [1, 2, 3];
async function test61() {
  const a61 = await new Promise<number>((res, rej) => {
    res(1);
  });
}

const check61: Record<string, boolean> = {
  drive: true,
  kpp: false,
  dasdaasd: true,
};
/**
 * function generic (62 lesson)
 */
function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res62 = logMiddleware<number>(10);

function getSplitedHalf62<T>(data: T[]): T[] {
  const l = data.length / 2;

  return data.splice(0, l);
}

const halflength62 = getSplitedHalf62<number>([4, 5, 6, 7]);

/**
 * Generic func, Interface, Types (64 lesson)
 */

const split64: <T>(data: Array<T>) => T[] = getSplitedHalf62;
const split642: <Y>(data: Array<Y>) => Y[] = getSplitedHalf62;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};
/**
 * limitation Generics (65 lesson)
 */

class Vehicle65 {
  run: number;
}

function kmToMiles<T extends Vehicle65>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;

  return vehicle;
}

class LCV extends Vehicle65 {
  capacity: number;
}

const vehicle65 = kmToMiles(new Vehicle65());
const lcv65 = kmToMiles(new LCV());
kmToMiles({ run: 3 }); //класс же выступает в роли интерфейса и нам не обяхзательно делать инстанс

function logId65<T extends string | number, Y>(id: T, additionalData: Y): { id: T; data: Y } {
  console.log(id);
  console.log(additionalData);
  return { id, data: additionalData };
}

/**
 * Generic class (67 lesson)
 */
//Можно юзать когда нам нужно описать апишку и мы не знаем когда нам придет дата
class Resp67<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }

    if (error) {
      this.error = error;
    }
  }
}
const resp67 = new Resp67<string, number>('data');

class HTTPResp67<F> extends Resp67<string, number> {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const resp267 = new HTTPResp67();
