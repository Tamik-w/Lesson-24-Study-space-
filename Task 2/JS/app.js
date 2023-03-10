"use strict";

class User {
    #name;
    constructor(name, login, age){
        this.#name = name;
        this.login = login;
        this.age = age;
    }
    getName(isAdmin){
        if(isAdmin){
            if(this.#name != ''){
                return this.#name;
            } else {
                return this.login;
            }
        } else {
            return 'Permission denied'
        }
    }
}
const user1 = new User('Mike', 'MK_18', 18);
const user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true))
console.log(user2.getName(true))
console.log(user2.getName(false))