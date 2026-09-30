interface Student{
    id:number,
    name:string,
    ispassed:boolean
}
let student : Student = {

    id : 2,
    name : "pavi",
    ispassed : true

    
}
console.log(student);

//example2
interface Employee{
    id       : number,
    name     : string,
    salary   : number,
    ispassed : boolean

}
let emp : Employee = {
    id       : 546755,
    name     : "suchithra",
    salary   : 67890865,
    ispassed : true
}
console.log(emp);

//example 3  for optional parameters
interface Customer{
    id   : number,
    name  : string,
    email ?: string 
}
let cust1 : Customer = {
    id : 1,
    name : "rahul"
}
let cust2 : Customer ={
    id : 2,
    name :"ramu"
}
console.log(cust1);
console.log(cust2);


//example interface with function

interface Product{
    id  : number,
    name : string
    price : number,

}

function displayProduct (product : Product)   :  void{
    console.log("Product id:", product.id);
    console.log("Product name:",product.name);
    console.log("Product price",product.price);

}


// displayProduct(
//     {
//         id : 1,
//         name : "iphone",
//         price : 987489
//     }
// );

// displayProduct({
//     id:2,
//     name:"android",
//     price:8764367
// });


//example nested interface

interface Address{
    city:string,
    state:string
}
interface User{
    id : number,
    name : string,
    address : Address
}
let user : User = {
    id : 1,
    name : "pavi",
    address : {
    city : "chittoor",
    state :"a.p"
    }
}
console.log(user);












