"use strict";
class ArrayUtility {
    // The method takes an array of type T and returns an item of type T
    getFirstItem(items) {
        return items[0];
    }
}
const utility = new ArrayUtility();
// TypeScript automatically figures out what 'T' is based on what you pass in
const firstWord = utility.getFirstItem(["Apple", "Banana", "Cherry"]); // T is string
const firstNumber = utility.getFirstItem([10, 20, 30]); // T is number
console.log(firstWord.toUpperCase());
console.log(firstNumber + 5);
