

var studentname  :string = "pavi1";

let ages           : number = 220;

let ispass      : boolean = false;

let studentname1  : any =  "rahul";

let whatisinyourmind : unknown = "abjvvjl";

let nothing        : null = null;

let notassigned : undefined = undefined;


//diff any and unknown....

let value1 : any ="hello";
console.log(value1.toUpperCase());

value1 = 100.746899;
console.log(value1.toFixed(2));
console.log(value1);

let value2 : unknown = "Hello";
// console.log(value2.toUpperCase)
if (typeof(value2)=="string"){
    console.log(value2.toUpperCase)

}
else if(typeof(value2)=="number"){
    console.log(value2.toFixed(2));
} 