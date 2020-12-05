/* 
Functions: 

- JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression

- Function declarations are hoisted in our code, and run ONLY when we call them (or invoke them)
. So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his or her hand up, waiting to ask a question. That student does not ask the question until the teacher calls upon them. student = function, teacher invokes them by calling on them to ask the question.

- Function expressions are NOT hoisted, and are generally stored in variables

- Functions without names are known as anonymous functions

*/

//Function Declaration

function sayHello() { //keyword, name of the function, (), {to denote whats being excuted by the function}
    console.log("Hi");
}

sayHello(); //()'s invokes or calls the functions

//Function Expression

let greetings = function (){ //no name is anonymous, calling upon variable which has a function
    console.log("Hello");
}

greetings();

/*

Parameters

- Functions can take in information when we invoke them
- Think of parameters as a newly delcared variable that we have not given a value to yet; placeholder
    -The value that we pass into our function when we call the function to run (which is known as an argument) is the value that gets assigned to the parameter
- Rule of thumb; general naming convention for function parameters: the parameter should be named something related to the information we are passing into the function. If we are passing in an interger, we may name our paramter num or number 
*/

function myDog(husky) { //function declaration, name of the function (myDog) and husky is the placeholder(variable) can only be used into the curly braces; can give it multiple different values
    console.log(`My dogs name is ${husky}`);
}

myDog("Princess"); //undefined if you dont put in a value, have to set them each individually "Princess" is the arugment here and husky is the parameter
myDog("Luna");

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`)
}

allMyDogs("Mira", "Luna", "Charlie");

/*
Return

- Functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3); //Math provides math functions for us; round is rounding to the nearest integer; average is a lighter gray so it means something until it is used. turned bright blue when returned was added
    let returnString = `The average weight is ${average}`
    return returnString //This is how to return a string, average beloe is grayed out because this is first
    return average; //anything after return does not get executed
}

let averageWeight = calculator(15, 60, 55); //whatever the function returns will be stored in the variable
console.log(averageWeight);

/* 
Arrow Functions

- Arrow functions (or fat arrow function) were introduced ES6. They are bascially just a more concise way to write function expressions - NOT declarations
    - This means that arrow functions do NOT get hoisted 

- There are two types of arrow functions: concise body and block body 
    - The return happens automatically with a concise body arrow function
    - The return does NOT happen automatically with a block body arrow function

-Execution block is whatever is in the curly braces

*/

//Concise Body
let speak = (name) => console.log (`${name} goes woooooof`); //(=> is fat arrow); name is parameter
speak ("Luna"); //needs an argument to be invoked

let nameJoiner = (first, last) => `${first} ${last}`; //
let fullName = nameJoiner("Sarah", "Reynolds");
console.log(fullName);

//Block Body

let speaks = (name) => {// CURL BRACES MAKES THIS BLOCK BODY, does not return automatically
    console.log(`${name} goes woooof`)
} 

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
}

let fullName = nameJoiner("Sarah", "Reynolds");
console.log(fullName);

//Practice 1

function rectangle(length, width){
    let area = (length * width);
    return area;
}

let area1 = rectangle(4, 8); 
let area2 = rectangle(10, 5)

console.log(area1);
console.log(area2);

//Practice 2
//Write a function that will convert dog years into human years
//Formula: Human Years = (Dog Age -2) * 4 + 21

function humanYears(dogAge){
    let formula = (dogAge - 2) * 4 + 21;
    return formula
}
console.log(humanYears(11));