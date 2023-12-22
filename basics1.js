// Datatypes

// Primitive Datatypes

/*

1. Number
2. String
3. Boolean
4. undefined
5. null
6. BigInt
7. Symbol

*/

// Non Primitive Datatypes

/*

Objects
Arrays

*/

let firstName = "Harshit";
let lastName = "Kapoor";
let age = 25;

console.log(typeof firstName);
console.log(typeof "Akshay");

console.log(typeof typeof undefined);

// Call By Value

let num1 = 40;
console.log(num1);

let num2 = num1; // let num2 = 40;
console.log(num2);

num2 = 59;

console.log("NUM 1", num1);
console.log("NUM 2", num2);

// Call By Reference

let person = {
  firstName: "Sahil",
  lastName: "Khurana",
};

let anotherPerson = {
  firstName: "Sahil",
  lastName: "Khurana",
};

console.log("1 --->", person === anotherPerson);

// 0x01abc3456

let person2 = person; // let person = Memory Reference of Exsiting Object
person2.lastName = "Gupta";

console.log(person.lastName);
console.log(person);
console.log(person2);

console.log(person === person2);
