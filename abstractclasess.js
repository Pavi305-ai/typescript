"use strict";
// 'abstract' prevents making an instance of this class directly
class Appliance {
    constructor() {
        this.brand = "Generic";
    }
    // Regular method: has working code that gets inherited
    turnOff() {
        console.log("Appliance is now OFF.");
    }
}
// Child class MUST implement the abstract methods
class Microwave extends Appliance {
    // Supplying the actual code for the abstract method
    turnOn() {
        console.log("Microwave is humming and heating food.");
    }
}
// const item = new Appliance(); // ❌ Error: Cannot create an instance of an abstract class.
const kitchenMicrowave = new Microwave();
kitchenMicrowave.brand = "Samsung";
kitchenMicrowave.turnOn(); // Output: Microwave is humming and heating food.
kitchenMicrowave.turnOff(); // Output: Appliance is now OFF.
