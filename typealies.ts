type Emp ={
    id : number,
    name : string
}
let ep :Emp ={
    id : 1,
    name : "ramu"
}
console.log(ep);


//example for Alias with function

type Pro ={
    id : number,
    name : string,
    price: number
}
function Pro(pro : Pro) :void{
    console.log(pro . id);
    console.log(pro.name);
    console.log(pro.price)
}
Pro ({
    id : 1,
    name:"ramu",
    price : 45456
});
console.log(Pro);

//example
type Order={
    id : number,
    name : string,
    isdelivered : boolean,
    orderitem : string
    
}
let ordered : Order ={
    id : 6346,
    name : "phone",
    isdelivered :true,
    orderitem : "mobile"
}
console.log(ordered);
