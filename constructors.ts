class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  felt(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const users = new Person("Alice", 30);
users.felt();
