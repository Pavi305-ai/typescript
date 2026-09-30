"use strict";
// // 1. Define the interface structural contract
// interface Runnable {
//   speed: number;
//   execute(): void;
// }
// Class must satisfy BOTH interface designs
class Duck {
    fly() {
        console.log("Duck is flying in the sky.");
    }
    swim() {
        console.log("Duck is swimming in the pond.");
    }
}
const mallard = new Duck();
mallard.fly();
mallard.swim();
