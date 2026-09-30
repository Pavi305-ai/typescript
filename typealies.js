"use strict";
let ep = {
    id: 1,
    name: "ramu"
};
console.log(ep);
function Pro(pro) {
    console.log(pro.id);
    console.log(pro.name);
    console.log(pro.price);
}
Pro({
    id: 1,
    name: "ramu",
    price: 45456
});
console.log(Pro);
let ordered = {
    id: 6346,
    name: "phone",
    isdelivered: true,
    orderitem: "mobile"
};
console.log(ordered);
