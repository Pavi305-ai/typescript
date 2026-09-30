"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    felt() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const users = new Person("Alice", 30);
users.felt();
