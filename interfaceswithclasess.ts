// // 1. Define the interface structural contract
// interface Runnable {
//   speed: number;
//   execute(): void;
// }

// // 2. Class implements the interface contract
// class Cars implements Runnable {
//   // Must include the 'speed' property from the interface
//   public speed: number = 0;

//   // Must include the 'start' method from the interface
//   execute(): void {
//     this.speed = 60;
//     console.log(`Car started! Moving at ${this.speed} mph.`);
//   }
// }

// const myCars = new Car();
// myCars.execute(); // Output: Car started! Moving at 60 mph.
interface Flyer {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

// Class must satisfy BOTH interface designs
class Duck implements Flyer, Swimmer {
  fly(): void {
    console.log("Duck is flying in the sky.");
  }

  swim(): void {
    console.log("Duck is swimming in the pond.");
  }
}

const mallard = new Duck();
mallard.fly();
mallard.swim();
