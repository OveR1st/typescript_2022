/**
 * Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
выводящий сначала дату, а потом заданное сообщение
 */
type MD = Date | string;
abstract class Logger52 {
  abstract log(message: MD): void;

  printDate(message: MD) {
    this.log(message);
  }
}

class Logger252 extends Logger52 {
  log(message: MD): void {
    this.printDate(new Date().toString());

    this.printDate(message);
  }
}
//////////////////////////////////////
abstract class LoggerAuthor52 {
  abstract log(message: string): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class MyLoggerAuthor52 extends LoggerAuthor52 {
  log(message: string): void {
    //printDate который в родителе вызывает этот лог так как у нас абстракция
    console.log(message);
  }

  logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message); // а тут мы вызываем лог из наследуемого класса
  }
}

const logger52 = new MyLoggerAuthor52();

logger52.logWithDate('Мое сообщение');
