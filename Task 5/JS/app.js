class User {
    #phone;
    constructor(name, phone) {
      this.name = name;
      this.#phone = phone;
    }
  
    getPhone(isAdmin) {
      if (isAdmin) {
        console.log(this.#phone);
      } else {
        const phoneArr = this.#phone.split('-');
        for (let i = 1; i < phoneArr.length - 1; i++) {
          phoneArr[i] = '*'.repeat(phoneArr[i].length);
        }
        const hiddenPhone = phoneArr.join('-');
        console.log(hiddenPhone);
      }
    }
}

let user1 = new User('Mike', '067-888-88-99');
let user2 = new User('Tom', '099-888-88-99');

user1.getPhone(false);
user2.getPhone(false);
user1.getPhone(true);
user2.getPhone(true);