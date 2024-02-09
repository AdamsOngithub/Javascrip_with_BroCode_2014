// Static = a keyword that defines properties or methods that belong to the class itself rather than object created from that class

class MathUtil {
  static PI = 22 / 7;

  static getDiameter(reduis) {
    return 2 * reduis;
  }

  static getCircumference(reduis) {
    return 2 * this.PI * reduis;
  }

  static getArea(reduis) {
    return 2 * reduis * reduis;
  }
}

// console.log(MathUtil.PI);

// console.log(MathUtil.getDiameter(10));

// console.log(MathUtil.getCircumference(10));

// console.log(MathUtil.getArea(10));

//

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  sayHi() {
    console.log(`Hi,i am ${this.username}`);
  }

  static getUserCount() {
    console.log(`There are ${this.userCount} users online`);
  }
}

const user1 = new User("Bob");
const user2 = new User("John");
const user3 = new User("Steve");
user1.sayHi();
user2.sayHi();
User.getUserCount();
