"use strict";
// 1. Define the namespace container
var Validation;
(function (Validation) {
    // Use 'export' so this class can be used outside the namespace
    class TextValidator {
        constructor() {
            this.textValue = "";
        }
        isValid() {
            return this.textValue.length > 0;
        }
    }
    Validation.TextValidator = TextValidator;
})(Validation || (Validation = {}));
// 2. Access the class using dot (.) notation
const checker = new Validation.TextValidator();
checker.textValue = "Hello";
console.log(checker.isValid()); // Output: true
