require("./user");

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }
  getNames() {
    return this.users.map((name) => {
      return name.getName();
    });
  }
  getIntroductions() {
    return this.users.map((name) => {
      return name.getIntroduction();
    });
  }
}

module.exports = UserBase;
