// Variables definition should always start with var
// JS is a dynamically typed language, same varible can hold different types during the life of the execution
// This makes inputs flexible as you dont need to adhere to var types for functions, and is possible to run code even if the logic of the function does not make sense
// It is possible to run functions without inputs first
// You can even define fucntions as functions because var can be functions too
// JS has 7 built-in var types: 6 primitive and 1 object

var x = "Hello World!";
console.log(x);

function a () {

} ;

var a = function () {

} ;

function compare(x, y) {
  return x > y;
} ;

//Scope Chain
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
