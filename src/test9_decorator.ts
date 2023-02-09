interface IUserService89 {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserServie89 implements IUserService89 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}
type CreatedAt = {
  createdAt: Date;
};

function CreatedAt<T extends { new (...args: any): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

(new UserServie89() as IUserService89 & CreatedAt).createdAt;
