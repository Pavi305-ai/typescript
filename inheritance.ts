// Parent Class
class Animal {
  name: string = "Generic Animal";

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

// Child Class inherits from Animal
class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

// Usage
const myDog = new Dog();
myDog.name = "Buddy"; // ✅ Inherited property
myDog.eat();          // ✅ Inherited method (Output: Buddy is eating.)
myDog.bark();         // ✅ Child's own method
