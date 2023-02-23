"use strict";

class User {
    constructor(name, login, age) {
      this.name = name;
      this.login = login;
      this.age = age;
    }
  }
  
  class Admin extends User {
    #isAdmin = true;
  
    getUserName(user) {
      return user.name;
    }
  }

const user1 = new User('Mike', 'MK_18', 18);
const admin = new Admin('Admin', 'NRG', 22);

console.log(admin.getUserName(user1));
