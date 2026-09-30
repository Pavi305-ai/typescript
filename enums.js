"use strict";
// enum Directions{
//     down,
//     up,
//     front,
//     back,
//     roll
// }
// let directions=(Directions.up);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move);
//example2
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
    color[color["yellow"] = 3] = "yellow";
})(color || (color = {}));
let paint = color.red;
console.log(paint);
let currentrole = "guest" /* role.guest */;
console.log(currentrole);
