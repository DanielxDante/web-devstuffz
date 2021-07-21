// Variables definition should always start with var
// JS is a dynamically typed language, same varible can hold different types during the life of the execution
// This makes inputs flexible as you dont need to adhere to var types for functions, and is possible to run code even if the logic of the function does not make sense
// It is possible to run functions without inputs first
// You can even run functions within inputs (Eg: Running console.log() within inputs)
// You can define fucntions as functions because var can be functions too
// JS has 7 built-in var types: 6 primitive and 1 object
// Always put curly brace on the same line as the function declaration!!! (No arguments)

var x = "Hello World!";
console.log(x);

function a () {

} ;

var a = function () {

} ;

function compare(x, y) {
  return x > y;
} ;

// Scope Chain
// "this" is a global variable
// Funny Quote: "this" is bullshit, I never know what "this" is!
var msg = "hi";
console.log("global: message = " + msg);

var a = function () {
  var msg = "daniel";
  console.log("a: message = " + msg);
  b();
} ;

// Even though b is called inside a, b is physically defined outside of a, so it takes "hi" as the msg var.
// Call the var "this" to see all global Variables
function b () {
  console.log("b: message = " + msg);
} ;

a();

firstName: "Daniel";
lastName: "Tay";
social= {
  facebook: "danieltay",
  twitter: "Dante",
} ;

// Undefined in JS means that the memory space for the variable is created but no value is set to it yet.
// Not defined in JS means that the memory space for the variable is not created yet.
var x = 5;
if(x == undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined");
}

var string = "Hello";
string += " World";
console.log(string + "!")

console.log((5+4-1)/3)
// NaN = Not a Number
console.log(undefined/5)

var x = 4, y = 4;
if (x==y) {
  console.log("x is equal to y");
}

x = "4";
// JS automatically switches the type of variables before comparing
if (x == y) {
  console.log("x is still equal to y");
}
// Use Strict Equality ("===") to compare them without changing types
if (x === y) {
  console.log("Strict: x is equal to y");
}
else {
  console.log("Strict: x is not equal to y");
}


// All False If statements
// "||" is "or"
if (false || null || undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log("All false");
}

// All True If statements
// "&&" is "and"
if (true && "true" && 1 && -1 && "false") {
  console.log("All true");
}

function orderChickenWith(sidedish) {
  sidedish = sidedish || "shit"
  console.log("Chicken with " + sidedish);
}
orderChickenWith("noodles")
orderChickenWith()

var sum = 0
// i ++ is i = i + 1
for (var i = 0; i < 10; i++) {
  console.log(i)
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum)

// Object creation Way 1
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColour = "Blue";
company.$Logo = "Square"
company["Stock of company"] = 110
console.log(company);

// Object creation Way 2
var facebook = {
  name: "Facebook",
  $logo: "Square",
  ceo: {
    firstName: "Mark",
    favColour: "Blue"
  },
  "stock of company": 110,
};

console.log(facebook)
