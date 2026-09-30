"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
// 2. Export a Class
class Calculator {
    constructor() {
        this.total = 0;
        this.mode = "QUIET";
    }
    add(num) {
        this.total += num;
        if (this.mode === "VERBOSE") {
            console.log(`Added ${num}. Current total: ${this.total}`);
        }
    }
}
exports.Calculator = Calculator;
