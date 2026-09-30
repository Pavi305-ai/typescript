// 'abstract' prevents making an instance of this class directly
abstract class Appliance {
  public brand: string = "Generic";

  // Abstract method: has no code body {}, only a type rule
  abstract turnOn(): void;

  // Regular method: has working code that gets inherited
  turnOff(): void {
    console.log("Appliance is now OFF.");
  }
}

// Child class MUST implement the abstract methods
class Microwave extends Appliance {
  // Supplying the actual code for the abstract method
  turnOn(): void {
    console.log("Microwave is humming and heating food.");
  }
}

// const item = new Appliance(); // ❌ Error: Cannot create an instance of an abstract class.

const kitchenMicrowave = new Microwave();
kitchenMicrowave.brand = "Samsung";
kitchenMicrowave.turnOn();  // Output: Microwave is humming and heating food.
kitchenMicrowave.turnOff(); // Output: Appliance is now OFF.
