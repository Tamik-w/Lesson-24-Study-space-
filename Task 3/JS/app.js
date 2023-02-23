"use strict";

class User {
    #password;
    constructor(name, password){
        this.name = name;
        this.#password = password;
    }
    ChangeName(name, password){
        let thisName = name;
        if(password === '123'){
            return `Name Changed from ${this.name} to ${thisName}`
        } else {
            return 'Permission denied'
        }
    }
}
const user1 = new User('Mike', '123');

console.log(user1.ChangeName('Bill', '123'));