console.log("Welcome to JavaScript");

//Values and Variables
console.log("Jonas");
console.log(23);


let firstName = "Sonu Gupta";
console.log(firstName);
console.log(firstName);
console.log(firstName);

/////// Variable name conventions//////////
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

///////////////Data Types////////////
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//////let, const and var///////
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstname = 'Jonas';
const lastname = 'Schmedtmann';
console.log(firstname + ' ' + lastname);


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////Operator Precedence/////////
const Now = 2037;
const AgeJonas = Now - 1991;
const AgeSarah = Now - 2018;

console.log(Now - 1991 > Now - 2018);

let a, b;
a = b = 25 - 10 - 5; // x = y = 10, x = 10
console.log(a, b);

const averageAge = (AgeJonas + AgeSarah) / 2;
console.log(AgeJonas, AgeSarah, averageAge);