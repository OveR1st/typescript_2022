/**
 * Create class
 */
class UserClass {
  name: string;

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
