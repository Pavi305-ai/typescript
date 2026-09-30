class Vehicle {
  protected engineType: string = "V8";
}

// Subclass inheriting from Vehicle
class Car extends Vehicle {
  getEngine(): string {
    return this.engineType; // ✅ Allowed inside a subclass
  }
}

const myCar = new Car();
// console.log(myCar.engineType); // ❌ Error: Property 'engineType' is protected and only accessible within class 'Vehicle' and its subclasses.
console.log(myCar.getEngine()); // Output: V8
