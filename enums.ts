// enum Directions{
//     down,
//     up,
//     front,
//     back,
//     roll
// }
// let directions=(Directions.up);

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move);

//example2
enum color{
    red,
    blue,
    green,
    yellow
}
let paint:color = color.red;
console.log(paint);

//example 3
const enum role{
    user = "user",
    admin = "admin",
    guest = "guest"
}
let currentrole:role = role.guest;
console.log(currentrole);