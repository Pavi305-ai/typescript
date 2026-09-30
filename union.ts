let employeeId : string | number | boolean
employeeId = 101;
employeeId = "Emp101"
console.log(employeeId)


//example 2
let currentstatus : number | boolean;
currentstatus= true;
console.log(currentstatus);
currentstatus = 1;
console.log(currentstatus);


function displayValue(value:string | number):void{
    if(typeof value == "string"){
        console.log(value.toUpperCase());

    }
    else{
        console.log(value.toFixed(2))
    }
}

displayValue("hello");
displayValue(12345.75765);