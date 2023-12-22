// Execution Context

let firstName = "Akshay";
var lastName = "Khurana";

console.log(firstName);
console.log(lastName);

function printHello() {
  let abc = "DON";
  console.log("Hello from within the function");
  console.log(abc);
}

printHello();

console.log("Bye!");

/*

Global Exection Context

// Memory

firstName: undefined (Script or Block)
lastName: undefined (Global)

printHello: function


// Code

firstName : "Akshay" (Script or Block)
lastName : "Khurana" (Global)

*/

/*

printHello Execution Context


// Memory

abc : undefined (Script)

// Code

abc : DON (Script)

*/
