// 1. Define the namespace container
namespace Validation {
  // Use 'export' so this class can be used outside the namespace
  export class TextValidator {
    public textValue: string = "";

    isValid(): boolean {
      return this.textValue.length > 0;
    }
  }
}

// 2. Access the class using dot (.) notation
const checker = new Validation.TextValidator();
checker.textValue = "Hello";

console.log(checker.isValid()); // Output: true
