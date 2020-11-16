/*
VARIABLES
1-grammarAndTypes
    02-declarations.js
*/

//variables are a bucket
//What is a variable? a is the bucket and 1 is the contents, it is possible to be unfilled, bucket doesnt have a lid, can be filled 
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNNMENT
*/

/*
Declarations refer to when we 'declare' a variable, left side of the = sign

Initializations refer to when a variable is assigned a value, when bucket is set

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x; 
console.log('declaration 1:', x); //undefined, made something but haven't filled it yet

x = 10; 
console.log('Initialization 1:', x); //10

x = 33; 
console.log('Assignment 1:', x); //33

var y; 
console.log(y);

y = 'hello'; //contents of the bucket y are hello
console.log(y);

y = 'youare my fren';
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables, can dump out bucket and replace
Let = 'new' keyword for variables (introduced with ES6), ditto, more predictable
const = also 'new', declare unchangeable variables, bucket to look and see whats inside but you cant dump and replace, bucket with a lid
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

//elevenFifty = 'Super!' this won't work, bucket was filled with Amazing, can't be replaced

