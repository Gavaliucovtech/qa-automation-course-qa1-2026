class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
  static displayCount() {
    console.log(`Total users created: ${User.count}`);
  }
}

const user1 = new User("Victoria");
const user2 = new User("Sebastian");
const user3 = new User("Mark");

User.displayCount();
