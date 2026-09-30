"use strict";
//example1
let variable = [2, 3, 4, 6.5, 765];
console.log(variable);
//example2
let fruits = ["apple", "kiwi"];
console.log(fruits);
//push
let f = ['mango', 'banana'];
//adding element
f.push('cherry');
console.log(f);
console.log(f[3]);
//pop
let items = ["laptop", "mobile", "mouse"];
let removeditem = items.pop();
console.log(removeditem); //mouse
console.log(items); //lap,mob
//any
let mixedData = ["jhon", 28, true, { role: "admin" }];
console.log(mixedData[0]); //john
console.log(mixedData[4]);
console.log(mixedData[3]);
//for loop
let s = [54, 76, 98, 78];
for (let i = 0; i < s.length; i++) {
    console.log('s: $(s[i])');
}
//for..of loop - best for reading valuesdirectly
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
