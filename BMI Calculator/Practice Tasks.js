// 1. Function Basics

function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet(); // calling the function


// 2. Functions with Parameters

function greetUser(name) {
  console.log("Hello " + name + " 👋");
}
greetUser("Aria");
greetUser("Fenil");

// 3. Functions with Return Values

function add(a, b) {
  return a + b;
}
let result = add(5, 10);
console.log("Sum: " + result);

// 4. Function Expressions

const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(3, 4)); // 12

// 5. Arrow Functions (Modern Style)

const square = (n) => n * n;
console.log(square(6)); // 36

// 6. Default Parameters

function greetUser(name = "Guest") {
  console.log("Hello " + name);
}
greetUser();        // Hello Guest
greetUser("Lila");  // Hello Lila

// 7. Functions Inside Functions

function outer() {
  function inner() {
    console.log("I am inside!");
  }
  inner();
}
outer();
