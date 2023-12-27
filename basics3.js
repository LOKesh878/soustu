// Hoisting

printABC();

console.log(x); // undefined

var x = "123";
let a = "456";
a = 500;
const b = "567";
console.log(a);

// b = 678;

function printABC() {
  console.log("ABC");
}
