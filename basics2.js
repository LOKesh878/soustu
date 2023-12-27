// Type Conversion (Explicit Conversion)

let pinCode = 250004;
pinCode = String(pinCode);
console.log(pinCode, typeof pinCode);

let age = "28";
console.log(age, typeof age);

age = Number(age);
console.log(age, typeof age);

let myNum = 50;
console.log(myNum, typeof myNum);

myNum = Boolean(0);
console.log(myNum, typeof myNum);

console.log("***********");

// Type Coercion (Implicit Conversion)

// Boolean -> Number

let number1 = 50;
let number2 = true;

let result1 = number1 + number2; // 50 + 1
console.log(result1);

// Boolean -> String

let p1 = "20";
let p2 = true;

let result2 = p1 + p2; // "20" + "true"
console.log(result2);

// String -> Number
// Boolean -> Number

let result3 = p1 - p2; // 20 - 1
console.log(result3);

let result4 = p1 * p2; // 20 * 1
console.log(result4);

let result5 = p2 - p1; // true - "20"
console.log(result5);

let val1 = "Akshay";
let val2 = "Khurana";
let val3 = 50;

let result6 = val1 + val2; // "Akshay" + "Khurana"
console.log(result6); //AkshayKhurana

let result7 = val3 + val2; // "50" + "Khurana"
console.log(result7); // 50Khurana

let result8 = val3 + 40 + val2; // 50 + 40 + "Khurana"
console.log(result8);

// 50 + 40 + "Khurana"
// 90 + "Khurana"
// "90" + "Khurana"
// "90Khurana"

let result9 = val2 + 40 + val3;
console.log(result9); // Khurana4050
