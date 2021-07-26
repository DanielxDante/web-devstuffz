// Variables definition should always start with var
// JS is a dynamically typed language, same varible can hold different types during the life of the execution
// This makes inputs flexible as you dont need to adhere to var types for functions, and is possible to run code even if the logic of the function does not make sense
// It is possible to run functions without inputs first
// You can even run functions within inputs (Eg: Running console.log() within inputs)
// You can define fucntions as functions because var can be functions too
// JS has 7 built-in var types: 6 primitive and 1 object
// Functions are Objects in JS
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

// Even though function only takes 2 arguments, it is legal to put 3 or more when calling it
function add(x, y) {
  return x + y;
} ;
console.log(add(1,2,3));

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
console.log(facebook);
for (var prop in facebook) {
  console.log(prop + ": " + facebook[prop]);
}

function multiply(x, y) {
  return x * y;
} ;
console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply);

//Closures
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc
};
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

function doOperationOn(x, operation) {
  return operation(x);
};
var result = doOperationOn(5, multiplyBy3);
console.log(result);

// Primitives copy by value while objects copy by reference
// (Primitives are allocated one memory space for each variable that copied it but objects are given one memory space that links to another for each attribute, so when it gets copied, a memory space with the new variable name is created but links to the same atrribute memory space)
var a = 7;
var b = a;
console.log(a);
console.log(b);
b = 5
console.log(a);
console.log(b);

var a = {x: 7};
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log(a);
console.log(b);

function test() {
  console.log(this);
  this.myName = "Daniel";
};
test();

// Function constructor - Classes
// Circle is similar to the parent class
function Circle (radius) {
  this.radius = radius;
  // This creates the function getArea everytime we create a new instance of Circle, wich we do not want
  // this.getArea = function () {
  //   return Math.PI * Math.pow(this.radius, 2);
  // };
};
// So we use prototype, similar to methods in classes
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};
// myCircle creates an instance of Circle
var myCircle = new Circle(10);
console.log(myCircle)
console.log(myCircle.getArea());
var myOtherCircle = new Circle(20);
console.log(myOtherCircle)
console.log(myOtherCircle.getArea());

// "this" acts as self
var literalCircle = { //  equivalent to new Object()
  radius: 10,
  getArea: function () {
    var self = this;
    console.log(this);
    var increaseRadius = function() {
      self.radius = 20; // When "this" is used within a function within a function, "this" points to the global "this", so we use "self"
    };
    increaseRadius();
    console.log(this.radius)
    return Math.PI * Math.pow(this.radius, 2);
  },
};
console.log(literalCircle.getArea());

// Arrays are objects too
// Array creation Way 1
var array = new Array();
array[0] = "Daniel";
array[1] = 2;
array[2] = function(name) {
  console.log("hello " + name);
}
array[3] = {course: "HTML, CSS & JS"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);

// Array creation Way 2
var names = ["Daniel", "Tay", "Jin", "Hong"];
console.log(names);
names[100] = "Joe";
// This is one of the legit ways to loop an Array
// The way of traversing the array using (for name in names) cannot work because it will traverse the properties of names as well
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

// Immediate Invoke Function Expression(IIFE)
(function () {
  console.log("Hello Coursera");
})();
// IIFE exposing inner function within window
(function (window)
  {
    var danielGreeter = {};
    danielGreeter.name = "Daniel";
    var greeting = "Hello";
    danielGreeter.sayHello = function () {
      console.log(greeting + danielGreeter.name);
    };
    window.danielGreeter = danielGreeter;
  }
)(window);
danielGreeter.sayHello();

// DOM (Document Object Model) Manipulation
console.log(document.getElementById("name"));
// Function getElementById is part of HTMLDocument so you dont need to create it
// HTMLDocument is an example of an Application Programming Interface (API) used within applications outside of source code, sort of like a console in games
console.log(document instanceof HTMLDocument);
// Behaviour Binding from HTML - Using onclick in HTML
// The argument "event" is added to every Event Handler
function sayHi(event) {
  console.log(event);
  this.textContent = "Done!";
  var name = document.getElementById("name").value
  var message = "<h2> Hi " + name + "! </h2>"
  // document.getElementById("content").textContent = message;
  document.getElementById("content").innerHTML = message;

  if (name==="student") {
    // querySelector is more general than getElementById
    var title = document.querySelector("#title").textContent;
    title += " --- Student Mode";
    document.querySelector("#title").textContent = title;
  };
};

// Behaviour Binding in JS Way 1
document.querySelector("button").addEventListener("click",sayHi);
document.querySelector("body").addEventListener("mousemove",
    function (event) {
      if (event.shiftKey == true) {
        console.log("x: " + event.clientX);
        console.log("y: " + event.clientY);
      }
    }
  );

// Behaviour Binding in JS Way 2
// document.querySelector("button").onclick = sayHi;

// Event Handling
// You can nest Behaviours into an Event for when the page is loaded, the Behaviours are loaded, before content is loaded
document.addEventListener("DOMContentLoaded",
  function (event) {
    // function sayHi(event) {
    //   this.textContent = "Done!";
    //   var name = document.getElementById("name").value
    //   var message = "<h2> Hi " + name + "! </h2>"
    //   document.getElementById("content").innerHTML = message;
    //   if (name==="student") {
    //     var title = document.querySelector("#title").textContent;
    //     title += " --- Student Mode";
    //     document.querySelector("#title").textContent = title;
    //   };
    // };
    // document.querySelector("button").addEventListener("click",sayHi);
    console.log("FIN");
  }
);
