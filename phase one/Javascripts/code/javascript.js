// Syntax Rules
// Syntax are the rules how programs must be constructed:
// Syntax means the rules that tell the computer how to understand your code.
// It’s like grammar in a human language — if you break the rules, the computer gets confused and shows an error.

// const firstName = "Tebarek";
// let name"John Doe";

// **********************************************************

// Key Basic Concepts:

/////////////////////////////////////////////////////////////
// Variables: Used to store data. Declared using keywords like let or const, var.
// let age = 34;
// console.log(age);

// ********************************************************************************
//                     Data Types:
// //////////////////////////////////////////////////////////////////////////////////

//   Define the type of data a variable can hold, such as numbers, strings, booleans, arrays, and objects.
//   let message = "Hello, World!";
//     const PI = 3.14159;
// Strings are text, written within double or single quotes:
let message = "Hello, World!";

// let y = 6;

// // How to Compute values:
// let z = x + y;

// Example
// "John Doe"

// Numbers are written with or without decimals:
// Example
// 34.00
// 34
let price = 34.0;
// Boolean values are only two values: true or false
// Example
// true
// false
let isActive = true;

// Arrays are used to store multiple values in a single variable:
// Example
// let cars = ["Saab", "Volvo", "BMW"];
const color = ["red", "blue", "green"];
// Objects are variables too. But objects can contain many values.
// Example
// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// JavaScript Data Types
// In programming, data types are an important concept that defines the type of data a variable can hold.
// Different data types determine the kind of operations that can be performed on the data and how much
// space it occupies in memory. Here are some common data types in JavaScript:

// 1. Literals (Fixed values)

// These are hard-coded values — they never change directly in your code.
// They are written exactly as they are meant to be used.

// ✅ Examples
// 10            // number literal
// "Hello"       // string literal
// true          // boolean literal
// [1, 2, 3]     // array literal
// { name: "Tebarek" }  // object literal
// null          // null literal
// undefined     // undefined literal
10;
("Hello");

// 💡 2. Variables (Variable values)
// Variables are containers that hold values — and those values can change (or vary) during program execution.
// ✅ Examples:
// let age = 25;          // 'age' is a variable
// let name = "Tebarek";  // 'name' is a variable
// age = 26;              // value changed

let age = 90;
age = 91;
console.log(age);
