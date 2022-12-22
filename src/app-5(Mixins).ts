/**
 * Mixins (68 lesson)
 */
type Constructor = new (...args: any) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Acccordion {
  isOpened: boolean;
}

type ListType = GConstructor<List>;
type AcccordionType = GConstructor<Acccordion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

function ExtendedList<TBase extends ListType & AcccordionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AcccordionList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list68 = ExtendedList(AcccordionList);

const res68 = new list68(['first', 'second']);
console.log(res68.first);
console.log(res68.items);
